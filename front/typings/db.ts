export interface IUser {
  addMyCartLoading: boolean; // 카트에 담기
  addMyCartDone: boolean;
  addMyCartError: any;
  loadMyInfoLoading: boolean; // 내정보 가져오기 시도중
  loadMyInfoDone: boolean;
  loadMyInfoError: any;
  logInLoading: boolean; // 로그인 시도중
  logInError: any;
  logInDone: boolean;
  logOutLoading: boolean; // 로그아웃 시도중
  logOutError: any;
  logOutDone: boolean;
  signUpLoading: boolean; // 회원가입 시도중
  signUpDone: boolean;
  signUpError: any;
  me: any;
  cart: any;
}

export interface IStore {
  onModalDone: boolean;
  oneStore: any;
  store: any[];
  menu: any[];
  storeid: number;
  menuid: number;
  hasMoreMenu: boolean;
  loadDStoresLoading: boolean;
  loadDStoresDone: boolean;
  loadDStoresError: any;
  loadMStoresLoading: boolean;
  loadMStoresDone: boolean;
  loadMStoresError: any;
  loadAStoresLoading: boolean;
  loadAStoresDone: boolean;
  loadAStoresError: any;
  loadStoresLoading: boolean;
  loadStoresDone: boolean;
  loadStoresError: any;
  loadMenusLoading: boolean;
  loadMenusDone: boolean;
  loadMenusError: any;
  loadOneStoreLoading: boolean;
  loadOneStoreDone: boolean;
  loadOneStoreError: any;
}
