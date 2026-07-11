"use client";

import React from "react";

export default function SocialProofBar() {
  return (
    <div className="proof-bar">
      <div className="proof-bar-inner">
        <div className="proof-stat">
          <span className="num">50,000+</span>
          <span className="lbl">Happy Pet Families</span>
        </div>
        <div className="proof-divider"></div>
        <div className="proof-stat">
          <span className="num">4.9 ★</span>
          <span className="lbl">Average Rating</span>
        </div>
        <div className="proof-divider"></div>
        <div className="proof-stat">
          <span className="num">100%</span>
          <span className="lbl">Natural Ingredients</span>
        </div>
        <div className="proof-divider"></div>
        <div className="proof-stat">
          <span className="num">10 sec</span>
          <span className="lbl">Daily Routine</span>
        </div>
        <div className="proof-divider"></div>
        <div className="proof-stat">
          <span className="num">0</span>
          <span className="lbl">Brushing Battles</span>
        </div>
      </div>
    </div>
  );
}
