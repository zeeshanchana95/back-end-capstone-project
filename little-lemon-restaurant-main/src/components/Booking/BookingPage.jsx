import BookingForm from "./BookingForm"

export default function BookingPage(props) {
    return (
        <div className="form-wrapper">
            <BookingForm
                availableTimes={props.availableTimes}
                dispatch={props.dispatch}
            />
        </div>
    );
}