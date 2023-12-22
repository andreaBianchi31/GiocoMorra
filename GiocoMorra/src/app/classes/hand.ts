import { Fingers } from "./fingers";

const BASE_URL = '../assets/images/hands/';

export class Hand {
    fingers: Fingers | null = null;
    icon: string | null = null;

    constructor(fingersNumber: number) {
        this.setFinger(fingersNumber);
    }

    setFinger(fingersNumber: number)
    {
        if (fingersNumber > 0 && fingersNumber < 6) {
            switch (fingersNumber) {
                case 1:
                    this.fingers = Fingers.ONE_FINGER;
                    this.icon = BASE_URL + 'one-finger.png';
                    break;
                case 2:
                    this.fingers = Fingers.TWO_FINGERS;
                    this.icon = BASE_URL + 'two-fingers.png';
                    break;
                case 3:
                    this.fingers = Fingers.THREE_FINGERS;
                    this.icon = BASE_URL + 'three-fingers.png';
                    break;
                case 4:
                    this.fingers = Fingers.FOUR_FINGERS;
                    this.icon = BASE_URL + 'four-fingers.png';
                    break;
                case 5:
                    this.fingers = Fingers.FIVE_FINGERS;
                    this.icon = BASE_URL + 'five-fingers.png';
                    break;
            }
        }
        else
        {
            throw new Error('Fingers number must be between 1 and 5');
        }
    }
}
