import "./index.css";

export default function Contant({ name, image, rate, time, info, phone }) {
  return (
    <div className="contact">
      <div className="contact__ifo">
        <img src={image} alt={name} className="contact__photo" />

        <div className="contact__info--content">
          <div className="title__text">Господар - {name}</div>
          <div className="title__sub-block">
            <span className="title__sub-value">{phone}</span>
            <span className="title__sub-value">{time} </span>
            <span className="title__sub-value">{rate}% швидкості відгуків</span>
          </div>
        </div>
      </div>
      <div className="content">{info}</div>
    </div>
  );
}
