import React from 'react';

export const Discussion = (props) => {
  const { title, url } = props;

  return (
    <>
      <h2>Discussion</h2>
      <p>
        If you'd like to discuss this topic with us or other fellow community members, you
        can do so on our community page dedicated for this guide: <a href={url}>{title}</a>.
      </p>
      <p>
        You can also write us an email on <a href="mailto:support@autopi.io">support@autopi.io</a>.
        We usually respond back in 24 hours on working days.
      </p>
    </>
  )
}