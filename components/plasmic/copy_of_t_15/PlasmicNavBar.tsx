// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wEfjiqBxHYkBb6BdVhudM
// Component: P042NyAOatc3

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { AntdDatePicker } from "@plasmicpkgs/antd5/skinny/registerDatePicker";
import { datePickerHelpers as AntdDatePicker_Helpers } from "@plasmicpkgs/antd5/skinny/registerDatePicker";
import Button from "../../Button"; // plasmic-import: PpnfEKDtlDxR/component
import ErrorMessage from "../../ErrorMessage"; // plasmic-import: rJU7JF5xfaWJ/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantsl4Hg7TvBmAg } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: l4HG7TVBm_AG/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../t_15_imported_dep_4/plasmic.module.css"; // plasmic-import: LmQdyERnKGVSTHLkNgDKC/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: wEfjiqBxHYkBb6BdVhudM/projectcss
import sty from "./PlasmicNavBar.module.css"; // plasmic-import: P042NyAOatc3/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: FSgrAtpsDvAa/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 0fmjKShgLovd/icon

createPlasmicElementProxy;

export type PlasmicNavBar__VariantMembers = {
  reserveOpen: "reserveOpen";
};
export type PlasmicNavBar__VariantsArgs = {
  reserveOpen?: SingleBooleanChoiceArg<"reserveOpen">;
};
type VariantPropType = keyof PlasmicNavBar__VariantsArgs;
export const PlasmicNavBar__VariantProps = new Array<VariantPropType>(
  "reserveOpen"
);

export type PlasmicNavBar__ArgsType = {};
type ArgPropType = keyof PlasmicNavBar__ArgsType;
export const PlasmicNavBar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavBar__OverridesType = {
  menu?: Flex__<"div">;
  h2?: Flex__<"h2">;
  dateTimePicker?: Flex__<typeof AntdDatePicker>;
  dateTimePicker2?: Flex__<typeof AntdDatePicker>;
  button?: Flex__<typeof Button>;
  errorMessage?: Flex__<typeof ErrorMessage>;
  menuBar?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultNavBarProps {
  reserveOpen?: SingleBooleanChoiceArg<"reserveOpen">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavBar__RenderFunc(props: {
  variants: PlasmicNavBar__VariantsArgs;
  args: PlasmicNavBar__ArgsType;
  overrides: PlasmicNavBar__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "reserveOpen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.reserveOpen
      },
      {
        path: "dateTimePicker.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdDatePicker_Helpers)
      },
      {
        path: "dateTimePicker2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdDatePicker_Helpers)
      },
      {
        path: "error",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsl4Hg7TvBmAg()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"menu"}
      data-plasmic-override={overrides.menu}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.menu,
        {
          [sty.menureserveOpen]: hasVariant(
            $state,
            "reserveOpen",
            "reserveOpen"
          )
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__rbdkv, {
          [sty.freeBoxreserveOpen__rbdkv7LBt]: hasVariant(
            $state,
            "reserveOpen",
            "reserveOpen"
          )
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__z49Yq, {
            [sty.freeBoxreserveOpen__z49Yq7LBt]: hasVariant(
              $state,
              "reserveOpen",
              "reserveOpen"
            )
          })}
          onClick={async event => {
            const $steps = {};

            $steps["updateReserveOpen"] = true
              ? (() => {
                  const actionArgs = {
                    vgroup: "reserveOpen",
                    operation: 6,
                    value: "reserveOpen"
                  };
                  return (({ vgroup, value }) => {
                    if (typeof value === "string") {
                      value = [value];
                    }

                    $stateSet($state, vgroup, false);
                    return false;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateReserveOpen"] != null &&
              typeof $steps["updateReserveOpen"] === "object" &&
              typeof $steps["updateReserveOpen"].then === "function"
            ) {
              $steps["updateReserveOpen"] = await $steps["updateReserveOpen"];
            }
          }}
        />

        <div className={classNames(projectcss.all, sty.freeBox__hVhcR)}>
          <div className={classNames(projectcss.all, sty.freeBox__npyu8)}>
            <h2
              data-plasmic-name={"h2"}
              data-plasmic-override={overrides.h2}
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2
              )}
            >
              {"Check availability"}
            </h2>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__x7Qoi
              )}
            >
              {
                "You'll be redirected in our booking website to check avaibilities."
              }
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__aBbd)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__w5Qvi
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"From"}
                  </span>
                </React.Fragment>
              </div>
              {(() => {
                const child$Props = {
                  className: classNames("__wab_instance", sty.dateTimePicker),
                  onChange: generateStateOnChangePropForCodeComponents(
                    $state,
                    "value",
                    ["dateTimePicker", "value"],
                    AntdDatePicker_Helpers
                  ),
                  popupScopeClassName: sty["dateTimePicker__datePickerPopup"],
                  value: generateStateValueProp($state, [
                    "dateTimePicker",
                    "value"
                  ])
                };
                initializeCodeComponentStates(
                  $state,
                  [
                    {
                      name: "value",
                      plasmicStateName: "dateTimePicker.value"
                    }
                  ],
                  [],
                  AntdDatePicker_Helpers ?? {},
                  child$Props
                );

                return (
                  <AntdDatePicker
                    data-plasmic-name={"dateTimePicker"}
                    data-plasmic-override={overrides.dateTimePicker}
                    {...child$Props}
                  />
                );
              })()}
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__kwU4Z)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qqMn1
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"To"}
                  </span>
                </React.Fragment>
              </div>
              {(() => {
                const child$Props = {
                  className: classNames("__wab_instance", sty.dateTimePicker2),
                  onChange: generateStateOnChangePropForCodeComponents(
                    $state,
                    "value",
                    ["dateTimePicker2", "value"],
                    AntdDatePicker_Helpers
                  ),
                  popupScopeClassName: sty["dateTimePicker2__datePickerPopup"],
                  value: generateStateValueProp($state, [
                    "dateTimePicker2",
                    "value"
                  ])
                };
                initializeCodeComponentStates(
                  $state,
                  [
                    {
                      name: "value",
                      plasmicStateName: "dateTimePicker2.value"
                    }
                  ],
                  [],
                  AntdDatePicker_Helpers ?? {},
                  child$Props
                );

                return (
                  <AntdDatePicker
                    data-plasmic-name={"dateTimePicker2"}
                    data-plasmic-override={overrides.dateTimePicker2}
                    {...child$Props}
                  />
                );
              })()}
            </div>
            <div
              className={classNames(projectcss.all, sty.freeBox__p5Jpc, {
                [sty.freeBoxreserveOpen__p5Jpc7LBt]: hasVariant(
                  $state,
                  "reserveOpen",
                  "reserveOpen"
                )
              })}
            >
              <Button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames("__wab_instance", sty.button, {
                  [sty.buttonreserveOpen]: hasVariant(
                    $state,
                    "reserveOpen",
                    "reserveOpen"
                  )
                })}
                color={"sand"}
                link={undefined}
                onClick={async event => {
                  const $steps = {};

                  $steps["updateError"] =
                    $state.dateTimePicker2.value <=
                      $state.dateTimePicker.value ||
                    !$state.dateTimePicker2.value ||
                    !$state.dateTimePicker.value
                      ? (() => {
                          const actionArgs = {
                            variable: {
                              objRoot: $state,
                              variablePath: ["error"]
                            },
                            operation: 0,
                            value: true
                          };
                          return (({
                            variable,
                            value,
                            startIndex,
                            deleteCount
                          }) => {
                            if (!variable) {
                              return;
                            }
                            const { objRoot, variablePath } = variable;

                            $stateSet(objRoot, variablePath, value);
                            return value;
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                  if (
                    $steps["updateError"] != null &&
                    typeof $steps["updateError"] === "object" &&
                    typeof $steps["updateError"].then === "function"
                  ) {
                    $steps["updateError"] = await $steps["updateError"];
                  }

                  $steps["updateError2"] = !(
                    $state.dateTimePicker2.value <=
                      $state.dateTimePicker.value ||
                    !$state.dateTimePicker2.value ||
                    !$state.dateTimePicker.value
                  )
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["error"]
                          },
                          operation: 0,
                          value: false
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          $stateSet(objRoot, variablePath, value);
                          return value;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["updateError2"] != null &&
                    typeof $steps["updateError2"] === "object" &&
                    typeof $steps["updateError2"].then === "function"
                  ) {
                    $steps["updateError2"] = await $steps["updateError2"];
                  }

                  $steps["runCode"] = !(
                    $state.dateTimePicker2.value <=
                      $state.dateTimePicker.value ||
                    !$state.dateTimePicker2.value ||
                    !$state.dateTimePicker.value
                  )
                    ? (() => {
                        const actionArgs = {
                          customFunction: async () => {
                            return (() => {
                              function openURLInNewTab(url) {
                                window.open(url, "_blank");
                              }
                              var originalURL =
                                "https://www.booking.com/hotel/th/keemala.fr.html?label=French_Switzerland_FR_CH_29561951665-M9VZFx87coDtvNIFyOFa9QS637818831057%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55347738651%3Atidsa-302083110424%3Alp9187719%3Ali%3Adec%3Adm%3Aag29561951665%3Acmp389373625&sid=4678823f89add22d0ba835a16ea07602&aid=318615&ucfs=1&arphpl=1&checkin=2024-06-06&checkout=2024-07-16&dest_id=-3414444&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=1&req_children=0&age=0&req_age=0&hpos=1&hapos=1&sr_order=popularity&srpvid=aac260ed6e600275&srepoch=1713275258&all_sr_blocks=134462704_86174738_0_1_0%2C134462704_86174738_0_1_0&highlighted_blocks=134462704_86174738_0_1_0%2C134462704_86174738_0_1_0&matching_block_id=134462704_86174738_0_1_0&sr_pri_blocks=134462704_86174738_0_1_0__94715500%2C134462704_86174738_0_1_0__94715500&from_sustainable_property_sr=1&from=searchresults#hotelTmpl";
                              var extractedCheckinDate =
                                $state.dateTimePicker.value.substring(0, 10);
                              var extractedCheckoutDate =
                                $state.dateTimePicker2.value.substring(0, 10);
                              var updatedURL = originalURL
                                .replace(
                                  /(checkin=)[^&]+/,
                                  "$1" + extractedCheckinDate
                                )
                                .replace(
                                  /(checkout=)[^&]+/,
                                  "$1" + extractedCheckoutDate
                                );
                              return openURLInNewTab(updatedURL);
                            })();
                          }
                        };
                        return (({ customFunction }) => {
                          return customFunction();
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["runCode"] != null &&
                    typeof $steps["runCode"] === "object" &&
                    typeof $steps["runCode"].then === "function"
                  ) {
                    $steps["runCode"] = await $steps["runCode"];
                  }
                }}
                target={true}
              >
                {"Check availibility for this dates"}
              </Button>
            </div>
            <ErrorMessage
              data-plasmic-name={"errorMessage"}
              data-plasmic-override={overrides.errorMessage}
              className={classNames("__wab_instance", sty.errorMessage, {
                [sty.errorMessagereserveOpen]: hasVariant(
                  $state,
                  "reserveOpen",
                  "reserveOpen"
                )
              })}
              isVisible={(() => {
                try {
                  return $state.error;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()}
            />
          </div>
        </div>
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"menuBar"}
        data-plasmic-override={overrides.menuBar}
        hasGap={true}
        className={classNames(projectcss.all, sty.menuBar, {
          [sty.menuBarreserveOpen]: hasVariant(
            $state,
            "reserveOpen",
            "reserveOpen"
          )
        })}
      >
        <PlasmicImg__
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"100%"}
          displayMaxHeight={"none"}
          displayMaxWidth={"50px"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"100%"}
          src={{
            src: "/plasmic/copy_of_t_15/images/logo1Svg.svg",
            fullWidth: 150,
            fullHeight: 150,
            aspectRatio: 1
          }}
        />

        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__oIFtO)}
        >
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__ai6Bn
            )}
            component={Link}
            href={"#about"}
            platform={"nextjs"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__afpYn)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__wc9Yv
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "About"
                : "About"}
            </div>
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__utChD)}
                role={"img"}
              />
            ) : null}
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link___6TCfQ
            )}
            component={Link}
            href={"#rooms"}
            platform={"nextjs"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__mgVv6)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__yyGc
              )}
            >
              {"Rooms"}
            </div>
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__dzZeI)}
                role={"img"}
              />
            ) : null}
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__bFoBk
            )}
            component={Link}
            href={"#discover"}
            platform={"nextjs"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__q5M4)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__eDu1Y
              )}
            >
              {"Spa"}
            </div>
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__fou66)}
                role={"img"}
              />
            ) : null}
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__pll39
            )}
            component={Link}
            href={"#restaurant"}
            platform={"nextjs"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__zEnXx)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kSsd
              )}
            >
              {"Restaurant"}
            </div>
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__mYtM)}
                role={"img"}
              />
            ) : null}
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__stptc
            )}
            component={Link}
            onClick={async event => {
              const $steps = {};

              $steps["updateReserveOpen"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: "reserveOpen",
                      operation: 4,
                      value: "reserveOpen"
                    };
                    return (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }

                      $stateSet($state, vgroup, true);
                      return true;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateReserveOpen"] != null &&
                typeof $steps["updateReserveOpen"] === "object" &&
                typeof $steps["updateReserveOpen"].then === "function"
              ) {
                $steps["updateReserveOpen"] = await $steps["updateReserveOpen"];
              }
            }}
            platform={"nextjs"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__c1NI7)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ifeKs
              )}
            >
              {"Reservations"}
            </div>
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__lf6Wx)}
                role={"img"}
              />
            ) : null}
          </Stack__>
        </Stack__>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  menu: [
    "menu",
    "h2",
    "dateTimePicker",
    "dateTimePicker2",
    "button",
    "errorMessage",
    "menuBar",
    "img"
  ],
  h2: ["h2"],
  dateTimePicker: ["dateTimePicker"],
  dateTimePicker2: ["dateTimePicker2"],
  button: ["button"],
  errorMessage: ["errorMessage"],
  menuBar: ["menuBar", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  menu: "div";
  h2: "h2";
  dateTimePicker: typeof AntdDatePicker;
  dateTimePicker2: typeof AntdDatePicker;
  button: typeof Button;
  errorMessage: typeof ErrorMessage;
  menuBar: "div";
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavBar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavBar__VariantsArgs;
    args?: PlasmicNavBar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavBar__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNavBar__ArgProps,
          internalVariantPropNames: PlasmicNavBar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "menu") {
    func.displayName = "PlasmicNavBar";
  } else {
    func.displayName = `PlasmicNavBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBar = Object.assign(
  // Top-level PlasmicNavBar renders the root element
  makeNodeComponent("menu"),
  {
    // Helper components rendering sub-elements
    h2: makeNodeComponent("h2"),
    dateTimePicker: makeNodeComponent("dateTimePicker"),
    dateTimePicker2: makeNodeComponent("dateTimePicker2"),
    button: makeNodeComponent("button"),
    errorMessage: makeNodeComponent("errorMessage"),
    menuBar: makeNodeComponent("menuBar"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicNavBar
    internalVariantProps: PlasmicNavBar__VariantProps,
    internalArgProps: PlasmicNavBar__ArgProps
  }
);

export default PlasmicNavBar;
/* prettier-ignore-end */