import styles from './second-component.module.css';
import {Button} from "@text-nxx/shared/ui";
import {Link} from "react-router-dom";

/* eslint-disable-next-line */
export interface SecondComponentProps {}

 function SecondComponent(props: SecondComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SecondComponent!</h1>
        <Button/>
        <h1><Link to="/">Back</Link></h1>
    </div>
  );
}

export default SecondComponent