import React, { memo } from "react";
import "./toolTip.css";

interface Props {
  toolTipText: string;
  children: React.ReactNode;
}

export const ToolTip = memo(({ toolTipText, children }: Props) => {
  return (
    <div className="tooltip-container">
      <div className="tooltip">
        {children}
        <span className="tooltiptext">{toolTipText}</span>
      </div>
    </div>
  );
});
