import React from "react";
import "./Card.css";

export const Card = () => {
    return (
        <div className="card-wrapper">
            <div className="card">
                <img
                    src="https://catastic.b-cdn.net/wp-content/uploads/2019/12/munchkin-kitten.jpg"
                    alt="Kitten"
                    className="card-img"
                />
                <h1 className="card-header">Munchkin Cat</h1>
                <p className="card-description">Lovely 3 years old munchkin Tofu, looking for a forever home.</p>
            </div>
            <div className="card">
                <img
                    src="https://blog.petloverscentre.com/wp-content/uploads/2021/05/Zorro-from-SOSD-Singapore.png"
                    alt="singaporespecial"
                    className="card-img"
                />
                <h1 className="card-header">Singapore Special</h1>
                <p className="card-description">Singapore Special Dog,Ruffles, aged 4 years old looking for new home. </p>
            </div>
            <div className="card">
                <img
                    src="https://1.bp.blogspot.com/-HqLCJsm38A4/X4-kqD3lXvI/AAAAAAAAGGs/a2-6xg_bFaIa0DwuqhWK07MoGiG7_D-9QCLcBGAsYHQ/s800/Persian-cat.jpg"
                    alt="flatfacecat"
                    className="card-img"
                />
                <h1 className="card-header">Flat Face Cat</h1>
                <p className="card-description">Cutie Cat Mickey, 4 months old searching for new fur parents!</p>
            </div>
            <div className="card">
                <img
                    src="https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036_1280.jpg"
                    alt="goldenretriever"
                    className="card-img"
                />
                <h1 className="card-header">Golden Retriever</h1>
                <p className="card-description">Goldie Tom, aged 6 years old. In need of a loving and caring parents.</p>
            </div>
            <div className="card">
                <img
                    src="https://dogsbestlife.com/wp-content/uploads/2020/07/Rottweiler-scaled.jpeg"
                    alt="Rottie"
                    className="card-img"
                />
                <h1 className="card-header">Rottweiler Dog</h1>
                <p className="card-description">Rottie Thomas, aged 8 years old up for adoption.</p>
            </div>
            <div className="card">
                <img
                    src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_1280.jpg"
                    alt="Labrador"
                    className="card-img"
                />
                <h1 className="card-header">Labrador</h1>
                <p className="card-description">Labrador Tim, 8 months old is in need of a loving family.</p>
            </div>
        </div>
    );
};
