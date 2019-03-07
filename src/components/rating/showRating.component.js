import React from 'react';
import star from '../../assets/icons/star.png';
import star_filled from '../../assets/icons/star_filled.png';

function calculateRatingAverage(rating) {
    if(rating) {
        const number = Object.keys(rating).length;
        let total = 0;
        Object.keys(rating).map(value => {
            return total = total + rating[value][Object.keys(rating[value])[0]];
            
        });
        return Math.ceil(total/number);
    }
    return 0;
}

function renderStar(rating) {
    const average = calculateRatingAverage(rating);
    switch(average) {
        case 1: 
            return (
                <div>
                    <img src={star_filled} alt="img-0" />
                    <img src={star} alt="img-1" />
                    <img src={star} alt="img-2" />
                    <img src={star} alt="img-3" />
                    <img src={star} alt="img-4" />
                </div>
            )
        case 2: 
            return (
                <div>
                    <img src={star_filled} alt="img-0" />
                    <img src={star_filled} alt="img-1" />
                    <img src={star} alt="img-2" />
                    <img src={star} alt="img-3" />
                    <img src={star} alt="img-4" />
                </div>
            )
        case 3: 
            return (
                <div>
                    <img src={star_filled} alt="img-0" />
                    <img src={star_filled} alt="img-1" />
                    <img src={star_filled} alt="img-2" />
                    <img src={star} alt="img-3" />
                    <img src={star} alt="img-4" />
                </div>
            )
        case 4: 
            return (
                <div>
                    <img src={star_filled} alt="img-0" />
                    <img src={star_filled} alt="img-1" />
                    <img src={star_filled} alt="img-2" />
                    <img src={star_filled} alt="img-3" />
                    <img src={star} alt="img-4" />
                </div>
            )
        case 5: 
            return (
                <div>
                    <img src={star_filled} alt="img-0" />
                    <img src={star_filled} alt="img-1" />
                    <img src={star_filled} alt="img-2" />
                    <img src={star_filled} alt="img-3" />
                    <img src={star_filled} alt="img-4" />
                </div>
            )
        default:
            return (
                <div>
                    <img src={star} alt="img-0" />
                    <img src={star} alt="img-1" />
                    <img src={star} alt="img-2" />
                    <img src={star} alt="img-3" />
                    <img src={star} alt="img-4" />
                </div>
            )
    }
}

export const ShowSiteRating = (props) => {
    const { rating } = props;
    return (
        <div>
            {renderStar(rating)}
        </div>
    );
}