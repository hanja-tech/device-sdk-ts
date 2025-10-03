import { ContainerModule } from "inversify";

import { DefaultSignerNear } from "@internal/app-binder/DefaultSignerNear";
import { appBinderTypes } from "@internal/app-binder/di/appBinderTypes";

export const appBindingModuleFactory = () =>
  new ContainerModule(({ bind }) => {
    bind(appBinderTypes.AppBinder).to(DefaultSignerNear);
  });
