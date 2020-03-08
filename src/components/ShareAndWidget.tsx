import * as React from 'react';
import ShareButtons from '@/components/ShareButtons';
import WidgetButtons from '@/components/WidgetButtons';

export default function ShareAndWidget () {
  return (
    <div className="btn-grp">
      <ShareButtons/>
      <hr/>
      <WidgetButtons/>
    </div>
  );
}
