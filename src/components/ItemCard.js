import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { backUrl } from "../data/Data";
import { commarNumber } from "../functions/utils";
import theme from "../styles/theme";
import { TextButton, TextFillButton } from "./elements/UserContentTemplete";

const Container = styled.div`
display: flex; 
padding: 32px 0;
width: 100%;
height: 120px;
border-bottom: 1px solid ${theme.color.font4};
cursor:pointer;
@media screen and (max-width:550px) { 
    flex-direction:column;
    height:auto;
}
`
const ContentContainer = styled.div`
display:flex;
width:60%;
cursor:pointer;
@media screen and (max-width:550px) { 
    width:100%;
    border-right:none;
}
`
const ItemCard = (props) => {
    let { item, link } = props;

    const navigate = useNavigate();
    const getPeriodByNumber = (num) => {
        let result = "";
        let period_list = [
            { name: '1일', val: 1 },
            { name: '3일', val: 3 },
            { name: '1주일', val: 7 },
            { name: '2주일', val: 14 },
            { name: '3주일', val: 21 },
            { name: '1개월', val: 30 },
            { name: '2개월', val: 60 },
            { name: '3개월', val: 90 },
            { name: '6개월', val: 180 },
            { name: '1년', val: 365 },
        ]
        for (var i = 0; i < period_list.length; i++) {
            if (num == period_list[i]?.val) {
                result = period_list[i]?.name;
            }
        }
        return result;
    }

    return (
        <>
            <Container>
                <ContentContainer onClick={() => { navigate(link) }}>
                    <img src={backUrl + item?.main_img} style={{ height: '120px', width: '160px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '12px', width: 'auto' }}>
                        <div style={{ fontSize: theme.size.font4, margin: '0 auto 16px 12px' }}>{item?.title}</div>
                        <div style={{ fontSize: theme.size.font5, margin: 'auto auto 0 12px' }}>{item?.nickname} / {(item?.date ?? "0000-00-00").substring(0, 10)}</div>
                    </div>
                </ContentContainer>
            </Container>
        </>
    )
}
export default ItemCard;