import jojoLetter from "./../assets/images/Menacing.svg";
import ladyBug from "./../assets/images/logo/o.svg";
import Styles from "./../styles/LoadingScreen.module.css";

const LoadingScreen = () => {
    return (
        <>
            <div className={Styles["loader-container"]}>
                <img src={jojoLetter} alt="Menacing" />
                <img src={jojoLetter} alt="Menacing" />
                <img src={jojoLetter} alt="Menacing" />
                <img src={jojoLetter} alt="Menacing" />
                <img src={jojoLetter} alt="Menacing" />
                <img src={jojoLetter} alt="Menacing" />
                <img src={jojoLetter} alt="Menacing" />
                <img src={jojoLetter} alt="Menacing" />
                <img src={jojoLetter} alt="Menacing" />
                <img src={jojoLetter} alt="Menacing" />
                <div className={Styles["loading-message"]}>
                    <p>Loading</p>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
            </div>
            <div className={Styles["mobile-loader"]}>
                <img src={ladyBug} alt="Lady bug" />
                <p>Loading...</p>
            </div>
        </>
    );
};

export default LoadingScreen;
