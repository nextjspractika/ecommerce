import classes from './ImageSlider.module.css';

type SliderImageProps=
{
    source:string,
    header:string,
    headerText:string,
}
export default function SliderImage(props:SliderImageProps)
{
    return(
        <div className={classes.container}>
            <img className={classes.img} src={props.source}/>
            <div className={classes.text}>
                <h2 className={classes.header}>{props.header}</h2>
                <p className={classes.headerText}>{props.headerText}</p>
                <button className={classes.button}>View</button>
            </div>
        </div>
    )
}