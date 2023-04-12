
export const ShopPublicList = ({ shopList }) => {


    return <div className="container d-flex   align-items-center justify-content-center position-relative"
        style={
            {
                top: 100, width: "100%", zIndex: -1, flexWrap: "wrap"
            }
        }
    >
        {
            shopList.map(element => (
                <div className="card" style={{ width: "200px", height: "200px", margin: "2px" }}>
                    <div className="card-header d-flex">{element.nombre}    </div>
                    <img src={require("../img/FastEats.png")} alt="logo imagen" className="card-img-top w-20" />
                    <div className="card-body">
                        <div className="h6">{element.nombre}</div>
                    </div>
                </div>
            )
            )
        }
    </div>
}