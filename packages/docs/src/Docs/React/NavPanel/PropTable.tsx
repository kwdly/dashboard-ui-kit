import * as React from 'react';
import { Widget } from '@duik/it/index'
import { Link } from 'react-router-dom'


import { PropTable, properties } from '../../components'


const itemProps = [
  properties.children(),
  properties.className(),
  properties.bool({
    prop: 'onRight | positionRight',
    desc: <>Renders border on the opposite <Link to="#on-right">side.</Link></>
  }),
  properties.bool({
    prop: 'dark',
    desc: <>Applies dark styling.</>
  }),
  properties.rest({
  }),
]


export const PropTableNavPanel = () => {

  return (
    <>
      <h2 id="props">NavPanel Props</h2>
      <Widget>
        <PropTable itemProps={itemProps} />
      </Widget > </>
  )
}

export default PropTableNavPanel;

