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
    </>
  )
}
