import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import $ from 'jquery'
import { useState } from "react";
import { MdNavigateNext } from 'react-icons/md'
import theme from "../../styles/theme";
import umziIcon from '../../assets/images/icon/umzi.svg'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'
export const WrappersStyle = styled.div`
position:relative;
display:flex;
flex-direction:column;
width:90%;
max-width:1000px;
margin-top:12rem;
margin-left:auto;
margin-right:auto;
margin-bottom:6rem;
min-height:58vh;
font-family:${props=>props.theme.font.normal};
@media screen and (max-width:1050px) { 
    margin-top:7rem;
}

`

export const Wrappers = (props) => {
    let { className, style } = props;
    const { pathname } = useLocation();
    useEffect(() => {
        $('.wrappers').css('min-height', `${$(window).height() - 372}px`);
    }, [pathname])
    useEffect(() => {

    }, [])
    return (
        <>
            <WrappersStyle className={`wrappers ${className}`} style={style}>
                {props.children ?? ""}
            </WrappersStyle>
        </>
    )
}
export const TitleContainer = styled.div`
display:flex;
align-items:center;
margin-top:36px;
margin-bottom:24px;
justify-content:space-between;
position:relative;
`
export const TitleStyle = styled.div`
font-size:${props => props.theme.size.font2};
font-weight:bold;
margin-right:16px;
display:flex;
align-items:center;
`
export const Title = (props) => {
    let { not_line, line, text, text_link, is_thumb, onPrevious, onNext, id, is_more_small} = props;
    const navigate = useNavigate();
    const [containerStyle, setContainerStyle] = useState({});
    const [titleStyle, setTitleStyle] = useState({});
    const [content, setContent] = useState(undefined);
    useEffect(() => {
        if (not_line) {
            setContainerStyle();
            setContent();
        }
        if (line) {
            setContainerStyle({ justifyContent: 'unset' });
            setTitleStyle({ position: 'absolute', background: '#fff', paddingRight: `${is_thumb?'8px':'24px'}` });
            setContent(<div style={{ background: '#203864', height: '4px', width: '100%' }} />);
        }
        if (text) {
            setContent(<div style={{ fontSize: theme.size.font5, color: theme.color.blue, fontWeight: 'bold', cursor: 'pointer' }} onClick={() => navigate(text_link)}>{text}</div>);
        }
    }, [props]);
    return (
        <>
            <TitleContainer className="title" style={containerStyle} id={id}>
                <TitleStyle style={titleStyle}>
                    <div style={{fontSize:`${is_more_small?theme.size.font2_5:''}`}}>{props?.children ?? ""}</div>
                    {is_thumb ?
                        <>
                            <img src={umziIcon} style={{ height: '32px', width: 'auto', paddingLeft: '8px' }} />
                        </>
                        :
                        <></>}
                </TitleStyle>
                {content}
                {onPrevious?
                <>
                <div style={{display:'flex'}}>
                    <div style={{padding:'8px 9px 7px 8px',background:theme.color.font6,borderRadius:'50%',cursor:'pointer',marginRight:'6px',marginLeft:'6px'}}>
                    <GrFormPrevious onClick={onPrevious}/>
                    </div>
                    <div style={{padding:'8px 8px 7px 9px',background:theme.color.font6,borderRadius:'50%',cursor:'pointer'}}>
                    <GrFormNext onClick={onNext}/>
                    </div>
                </div>
                </>
                :
                <></>}
                {/* <hr className="bar"/> */}

            </TitleContainer>

        </>
    )
}
export const Content = styled.div`
margin:0 auto 1rem 0;
width:100%;
font-size:${props => props.theme.size.font3};
display:flex;
flex-direction:column;
font-weight:normal;
@media screen and (max-width:700px) { 
    
}
`
export const Img = styled.img`
width: 100%;
height:320px;
background:#fff;
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
background-blend-mode: multiply;
@media screen and (max-width:1100px) {
    height: 28.8vw;
}
@media screen and (max-width:600px) {
    height: 52.2222222222vw;
}
`
export const Card = styled.div`
width: 48%; 
margin-bottom:16px;
background: ${props => props.theme.color.background3};
cursor:pointer;
@media screen and (max-width:600px) {
    width:100%;
}
`
export const WrapDiv = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
@media screen and (max-width:600px) { 
    display:none;
}
`
export const SliderDiv = styled.div`
display:none;
@media screen and (max-width:602px) { 
    display:flex;
}
`
export const ViewerContainer = styled.div`
margin:0 auto;
width:100%;
`
export const SelectType = styled.div`
display:flex;
width:100%;
z-index:5;
background:#fff;
margin:16px 0;
`
export const ShadowContainer = styled.div`
background:#FAFAFA;
border-radius:${props => props.theme.borderRadius};
padding:6px;
box-shadow:${props => props.theme.boxShadow};
`
export const RowContent = styled.div`
display:flex;
width:100%;
`
export const TextButton = styled.button`
width:124px;
height:28px;
border-radius:12px;
border:1px solid ${props => props.theme.color.font2};
color:${props => props.theme.color.font2};
background:#fff;
font-size:${props => props.theme.size.font4};
cursor:pointer;
@media screen and (max-width:700px) { 
    font-size:${props => props.theme.size.font5};
}
`
export const TextFillButton = styled.button`
width:124px;
height:28px;
border-radius:12px;
border:1px solid ${props => props.theme.color.font2};
color:#fff;
background:${props => props.theme.color.font2};
font-size:${props => props.theme.size.font4};
cursor:pointer;
@media screen and (max-width:700px) { 
    font-size:${props => props.theme.size.font5};
}
`