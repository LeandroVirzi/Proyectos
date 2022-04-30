import styled from "@emotion/styled";

const Res = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;

`
const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGECT24HOURS, IMAGEURL, LASTUPDATE } = resultado;
    return (  
        <Res>
            <Imagen 
                src={`https://cryptocompare.com/${IMAGEURL}`} 
                alt="imagencripto" 
            />
            <div>
                <Precio>El precio es de:  <span>{PRICE}</span></Precio>
                <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 horas: <span>{CHANGECT24HOURS}</span></Texto>
                <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>  
            </div>          
        </Res>
    );
}
 
export default Resultado;
