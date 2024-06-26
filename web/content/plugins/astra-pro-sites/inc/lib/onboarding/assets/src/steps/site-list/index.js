// External Dependencies.
import React, { useEffect, useState, useReducer } from 'react';
import { sortBy } from 'underscore';
import {
	SiteType,
	SiteOrder,
	SiteBusinessType,
	NoResultFound,
} from '@brainstormforce/starter-templates-components';
import { useNavigate } from 'react-router-dom';
import { decodeEntities } from '@wordpress/html-entities';
import { sprintf, __ } from '@wordpress/i18n';

// Internal Dependencies.
import { DefaultStep, PreviousStepLink, Button } from '../../components/index';
import './style.scss';
import { useStateValue } from '../../store/store';
import {
	isPro,
	whiteLabelEnabled,
	storeCurrentState,
	getAllSites,
} from '../../utils/functions';
import { setURLParmsValue } from '../../utils/url-params';
import SiteListSkeleton from './site-list-skeleton';
import GridSkeleton from './grid-skeleton';
import SiteGrid from './sites-grid/index';
import SiteSearch from './search-filter';
import FavoriteSites from './favorite-sites';
import RelatedSites from './related-sites';

export const useFilteredSites = () => {
	const [ { builder, siteType, siteOrder, allSitesData } ] = useStateValue();
	const allSites = !! Object.keys( allSitesData ).length
		? allSitesData
		: getAllSites();
	let sites = [];

	if ( builder ) {
		for ( const siteId in allSites ) {
			if ( builder === allSites[ siteId ][ 'astra-site-page-builder' ] ) {
				sites[ siteId ] = allSites[ siteId ];
			}
		}
	}

	if ( siteType ) {
		for ( const siteId in sites ) {
			if ( siteType === sites[ siteId ][ 'astra-sites-type' ] ) {
				sites[ siteId ] = sites[ siteId ];
			} else {
				delete sites[ siteId ];
			}
		}
	}

	if ( 'latest' === siteOrder && Object.keys( sites ).length ) {
		sites = sortBy( Object.values( sites ), 'publish-date' ).reverse();
	}

	return sites;
};

const SiteList = () => {
	const [ loadingSkeleton, setLoadingSkeleton ] = useState( true );
	const allFilteredSites = useFilteredSites();
	const history = useNavigate();
	const [ siteData, setSiteData ] = useReducer(
		( state, newState ) => ( { ...state, ...newState } ),
		{
			gridSkeleton: false,
			sites: {},
		}
	);
	const [ storedState, dispatch ] = useStateValue();
	const {
		onMyFavorite,
		builder,
		siteSearchTerm,
		siteType,
		siteOrder,
		siteBusinessType,
		selectedMegaMenu,
		allSitesData,
	} = storedState;

	useEffect( () => {
		setTimeout( () => {
			setLoadingSkeleton( false );
		}, 300 );
	}, [] );

	useEffect( () => {
		dispatch( {
			type: 'set',
			templateResponse: null,
			selectedTemplateName: '',
			selectedTemplateType: '',
			shownRequirementOnce: false,
			templateId: 0,
		} );

		setSiteData( {
			sites: allFilteredSites,
		} );
	}, [ builder, siteType, siteOrder, allSitesData ] );

	storeCurrentState( storedState );

	const siteCount = Object.keys( siteData.sites ).length;

	return (
		<DefaultStep
			content={
				<div
					className={ `site-list-screen-container ${
						loadingSkeleton ? 'site-loading' : 'site-loaded'
					}` }
				>
					<SiteListSkeleton />
					<div className="site-list-screen-wrap">
						<h1>
							{ __(
								'What type of website are you building?',
								'astra-sites'
							) }
						</h1>

						<div className="site-list-content">
							<SiteSearch setSiteData={ setSiteData } />

							<div className="st-templates-content">
								<div className="st-other-filters">
									<div className="st-category-filter">
										<SiteBusinessType
											parent={ siteBusinessType }
											menu={ selectedMegaMenu }
											onClick={ (
												event,
												option,
												childItem
											) => {
												dispatch( {
													type: 'set',
													siteBusinessType: option.ID,
													selectedMegaMenu:
														childItem.ID,
													siteSearchTerm:
														childItem.title,
													onMyFavorite: false,
													siteOrder: 'popular',
												} );
												const urlParam =
													setURLParmsValue(
														's',
														childItem.title
													);
												history( `?${ urlParam }` );
											} }
										/>
									</div>
									<div className="st-type-and-order-filters">
										{ builder !== 'gutenberg' && (
											<SiteType
												value={ siteType }
												onClick={ ( event, type ) => {
													dispatch( {
														type: 'set',
														siteType: type.id,
														onMyFavorite: false,
													} );
												} }
											/>
										) }
										<SiteOrder
											value={ siteOrder }
											onClick={ ( event, order ) => {
												dispatch( {
													type: 'set',
													siteOrder: order.id,
													onMyFavorite: false,
													siteBusinessType: '',
													selectedMegaMenu: '',
													siteSearchTerm: '',
												} );
												const urlParam =
													setURLParmsValue( 's', '' );
												history( `?${ urlParam }` );
											} }
										/>
									</div>
								</div>

								{ onMyFavorite ? (
									<FavoriteSites />
								) : (
									<>
										{ siteCount ? (
											<>
												<div className="st-sites-grid">
													{ siteSearchTerm ? (
														<div className="st-sites-found-message">
															{ sprintf(
																/* translators: %1$s: search term. */
																__(
																	'Starter Templates for %1$s:',
																	'astra-sites'
																),
																decodeEntities(
																	siteSearchTerm
																)
															) }
														</div>
													) : null }

													{ siteData.gridSkeleton ? (
														<GridSkeleton />
													) : (
														<SiteGrid
															sites={
																siteData.sites
															}
														/>
													) }
												</div>
											</>
										) : (
											<>
												<NoResultFound
													searchTerm={
														siteSearchTerm
													}
												/>
												<RelatedSites
													sites={ allFilteredSites }
												/>
											</>
										) }
									</>
								) }
							</div>
						</div>
					</div>
				</div>
			}
			actions={
				<>
					<PreviousStepLink before>
						{ __( 'Back', 'astra-sites' ) }
					</PreviousStepLink>

					{ ! isPro() && ! whiteLabelEnabled() && (
						<div className="cta-strip-right">
							<h5>
								{ __(
									'Get unlimited access to all Premium Starter Templates and more, at a single low cost!',
									'astra-sites'
								) }
							</h5>
							<Button
								className="st-access-btn"
								onClick={ () =>
									window.open(
										astraSitesVars.cta_links[ builder ]
									)
								}
							>
								{ __( 'Get Essential Bundle', 'astra-sites' ) }
							</Button>
						</div>
					) }
				</>
			}
		/>
	);
};

export default SiteList;
