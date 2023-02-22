import styles from './first-component.module.css';
import {Button} from "@text-nxx/shared/ui";
import {Link} from "react-router-dom";
import React from "react";

/* eslint-disable-next-line */
export interface FirstComponentProps {}

 function FirstComponent(props: FirstComponentProps) {
  return (
    <div className={styles['container']}>
        {''}
      <h1>Welcome to FirstComponent!</h1>
        <div> <Button></Button> </div>
        <h1><Link to="/second"> Second component</Link></h1>

    </div>
  );
}

export default FirstComponent;
