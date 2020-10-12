import React from 'react';

import { ReactComponent as AccordionIcon } from './accordion.svg';
import { ReactComponent as ArrowIcon } from './arrow.svg';
import { ReactComponent as ComponentIcon } from './componentIcon.svg';
import { ReactComponent as ErrorIcon } from './errorIcon.svg';
import { ReactComponent as GaugeIcon } from './gaugeIcon.svg';
import { ReactComponent as ImageIcon } from './image.svg';
import { ReactComponent as KonamiLogo } from './konamiLogo.svg';
import { ReactComponent as ListIcon } from './listIcon.svg';
import { ReactComponent as LoadingIcon } from './loading.svg';
import { ReactComponent as SafeStateIcon } from './safeStateIcon.svg';
import { ReactComponent as ShortcutIcon } from './shortcutIcon.svg';
import { ReactComponent as SizeIcon } from './sizeIcon.svg';
import { ReactComponent as StorageIcon } from './storageIcon.svg';
import { ReactComponent as UserIcon } from './userIcon.svg';

type iconOptions = {
  default: () => null;
  [key: string]: () => React.ReactNode;
}

const getIcon = (icon: string) => {
  const iconSelection: iconOptions = {
      accordionIcon: () => <AccordionIcon/>,
      arrowIcon: () => <ArrowIcon/>,
      componentIcon: () => <ComponentIcon/>,
      errorIcon: () => <ErrorIcon />,
      gaugeIcon: () => <GaugeIcon />,
      imageIcon: () => <ImageIcon/>,
      konamiIcon: () => <KonamiLogo/>,
      listIcon: () => <ListIcon />,
      loadingIcon: () => <LoadingIcon/>,
      safeStateIcon: () => <SafeStateIcon/>,
      shortcutIcon: () => <ShortcutIcon/>,
      sizeIcon: () => <SizeIcon/>,
      storageIcon: () => <StorageIcon/>,
      userIcon: () => <UserIcon/>,
      default: () => null
  }

  return (iconSelection[icon] || iconSelection.default)()
}

export const IconSelector = (icon: string) => {
    const iconClass = getIcon(icon);
    return (
      <>
        {iconClass}
      </>
    );
};