import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import theme from '../../styles/theme';
import axios from 'axios';
import { backUrl, slideSetting } from '../../data/Data';
import { Wrappers, Title, Content, Card, Img, WrapDiv, SliderDiv, ShadowContainer, RowContent } from '../../components/elements/UserContentTemplete';
import Loading from '../../components/Loading';
import $ from 'jquery';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AcademyCard from '../../components/AcademyCard';
import SelectTypeComponent from '../../components/SelectTypeComponent';
import { returnMoment } from '../../functions/utils';


const EventList = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [ingList, setIngList] = useState([]);
    const [endList, setEndList] = useState([]);
    const [typeNum, setTypeNum] = useState(0);
    useEffect(() => {
        async function fetchPost() {
            setLoading(true);
            const { data: response } = await axios.get('/api/items?table=event&status=1');
            let moment = returnMoment().substring(0, 10);
            let list = [...response?.data];
            let ing_list = [];
            let end_list = [];
            for (var i = 0; i < list.length; i++) {
                if (moment >= list[i]?.start_date && moment <= list[i]?.end_date) {
                    ing_list.push(list[i]);
                } else {
                    if (moment > list[i]?.end_date) {
                        end_list.push(list[i]);
                    }
                }
            }
            setIngList(ing_list);
            setEndList(end_list);
            setLoading(false);
        }
        fetchPost();
    }, [])

    const getmarginByIdx = (idx) => {
        let margin = "";
        if (idx % 3 == 0) {
            margin = "0 2.5% 8px 0";
        } else if (idx % 3 == 1) {
            margin = "0 2.5% 8px 2.5%";
        } else if (idx % 3 == 2) {
            margin = "0 0 8px 2.5%";
        }
        if (window.innerWidth < 700) {
            if(idx%2==0){
                margin = "0 2.5% 8px 0";
            }else{
                margin = "0 0 8px 2.5%";
            }
        }
        return margin;
    }
    return (
        <>
            <Wrappers className='wrappers'>
                {loading ?
                    <>
                        <Loading />
                    </>
                    :
                    <>
                        <Title className='pointer' link={'/academylist'} line={true}>이벤트</Title>
                        <div style={{ marginTop: '36px' }} />
                        <div style={{ display: 'flex', width: '100%', marginBottom: '16px' }}>
                            <div style={{ width: '50%', textAlign: 'center', cursor: 'pointer', fontSize: theme.size.font4, border: `1px solid ${theme.color.font1}`, background: `${typeNum == 0 ? theme.color.font1 : '#fff'}`, color: `${typeNum == 0 ? '#fff' : theme.color.font1}`, padding: '8px 0' }} onClick={() => { setTypeNum(0) }}>진행중 이벤트</div>
                            <div style={{ width: '50%', textAlign: 'center', cursor: 'pointer', fontSize: theme.size.font4, border: `1px solid ${theme.color.font1}`, background: `${typeNum == 1 ? theme.color.font1 : '#fff'}`, color: `${typeNum == 1 ? '#fff' : theme.color.font1}`, padding: '8px 0' }} onClick={() => { setTypeNum(1) }}>종료 이벤트</div>
                        </div>
                        <div style={{ marginTop: '36px' }} />
                        <RowContent style={{ flexWrap: 'wrap' }}>
                            {typeNum == 0 ?
                                <>
                                    {ingList.map((item, idx) => (
                                        <>
                                            <div style={{ width: `${window.innerWidth >= 700 ? '30%' : '47.5%'}`, margin: `${getmarginByIdx(idx)}`, display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={() => { navigate(`/post/event/${item?.pk}`) }}>
                                                <img src={backUrl + item?.main_img} style={{ width: '100%', height: `${window.innerWidth >= 700 ? '202px' :'28.785vw'}` }} />
                                                <div style={{ marginTop: '16px', fontWeight: 'bold', fontSize: `${window.innerWidth >= 700 ? theme.size.font4 : theme.size.font5}` }}>{item?.title}</div>
                                                <div style={{ margin: '16px 0', fontSize: `${window.innerWidth >= 700 ? theme.size.font5 : theme.size.font6}` }}>{item?.start_date.replaceAll('-', '.')} ~ {item?.end_date.replaceAll('-', '.')}</div>
                                            </div>
                                        </>
                                    ))}
                                </>
                                :
                                <></>}
                            {typeNum == 1 ?
                                <>
                                    {endList.map((item, idx) => (
                                        <>
                                            <div style={{ width: `${window.innerWidth >= 700 ? '30%' : '47.5%'}`, margin: `${getmarginByIdx(idx)}`, display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={() => { navigate(`/post/event/${item?.pk}`) }}>
                                                <img src={backUrl + item?.main_img} style={{ width: '100%', height: `${window.innerWidth >= 700 ? '202px' :'28.785vw'}` }} />
                                                <div style={{ marginTop: '16px', fontWeight: 'bold', fontSize: `${window.innerWidth >= 700 ? theme.size.font4 : theme.size.font5}` }}>{item?.title}</div>
                                                <div style={{ margin: '16px 0', fontSize: `${window.innerWidth >= 700 ? theme.size.font5 : theme.size.font6}` }}>{item?.start_date.replaceAll('-', '.')} ~ {item?.end_date.replaceAll('-', '.')}</div>
                                            </div>
                                        </>
                                    ))}
                                </>
                                :
                                <></>}
                        </RowContent>
                    </>}


            </Wrappers>
        </>
    )
}
export default EventList;