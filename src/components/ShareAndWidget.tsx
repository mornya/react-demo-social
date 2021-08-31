import React from 'react';
import ShareButtons from '@/components/ShareButtons';
import WidgetButtons from '@/components/WidgetButtons';

type Props = {};

const ShareAndWidget: React.FC<Props> = (_props: Props) => {
  return (
    <div className="btn-grp">
      <ShareButtons/>
      <hr/>
      <WidgetButtons/>
    </div>
  );
};

export default ShareAndWidget;
