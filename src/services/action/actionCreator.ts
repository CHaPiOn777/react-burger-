
import { INLOADER } from "./authAction";
import { LOADER } from "./orderDetailsAction";

interface ILoader {
  readonly type: typeof LOADER;
}
interface IInLoader {
  readonly type: typeof INLOADER;
}
export const loader = () => {
  return{
    type: LOADER
  }
}
export const inLoader = () => {
  return{
    type: INLOADER
  }
}

export type TLoader = 
| ILoader
| IInLoader;
