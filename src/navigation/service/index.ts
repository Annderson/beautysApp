import {
  NavigationActions,
  NavigationBackActionPayload,
  NavigationContainerComponent,
  NavigationNavigateActionPayload,
} from 'react-navigation';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let navigator: NavigationContainerComponent | null = null;

export function setNavigator(nav: NavigationContainerComponent | null): void {
  navigator = nav;
}

export function navigate(
  routeName: string,
  options?: Omit<NavigationNavigateActionPayload, 'routeName'>,
): void {
  const opts = {routeName, ...options};
  if (navigator) {
    navigator.dispatch(NavigationActions.navigate(opts));
  }
}

export function goBack(payload?: NavigationBackActionPayload): void {
  if (navigator) {
    navigator.dispatch(NavigationActions.back(payload));
  }
}
