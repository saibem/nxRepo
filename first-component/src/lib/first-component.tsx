import styles from './first-component.module.css';
import {Button} from "@text-nxx/shared/ui";

/* eslint-disable-next-line */
export interface FirstComponentProps {}

 function FirstComponent(props: FirstComponentProps) {
  return (
    <div className={styles['container']}>
        {''}
      <h1>Welcome to FirstComponent!</h1>
        <Button></Button>
    </div>
  );
}

export default FirstComponent;
