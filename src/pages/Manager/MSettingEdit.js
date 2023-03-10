import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import ManagerWrappers from '../../components/elements/ManagerWrappers';
import SideBar from '../../common/manager/SideBar';
import ManagerContentWrappers from '../../components/elements/ManagerContentWrappers';
import axios from 'axios';
import Breadcrumb from '../../common/manager/Breadcrumb';
import { AiFillFileImage } from 'react-icons/ai'
import ButtonContainer from '../../components/elements/button/ButtonContainer';
import AddButton from '../../components/elements/button/AddButton';
import CancelButton from '../../components/elements/button/CancelButton';
import $ from 'jquery';
import { addItem, updateItem } from '../../functions/utils';
import { Card, Title, Input, Select, Row, Col } from '../../components/elements/ManagerTemplete';
import { backUrl } from '../../data/Data';
import theme from '../../styles/theme';

const ImageContainer = styled.label`
border: 2px dashed ${props => props.theme.color.manager.font3};
margin:12px auto 6px 24px;
height:16rem;
border-radius:2rem;
text-align:center;
min-width:20rem;
@media screen and (max-width:700px) {
min-width:10rem;

    margin:16px 24px;
}
`
const Img = styled.img`
width: 16rem; 
height: 12rem;
margin: 24px;
@media screen and (max-width:700px) {
    width: 12rem; 
    height: 9rem;
}
`
const MSettingEdit = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [myNick, setMyNick] = useState("")
    const [url, setUrl] = useState('')
    const [url2, setUrl2] = useState('')
    const [setting, setSetting] = useState({});
    const [content, setContent] = useState(undefined)
    const [content2, setContent2] = useState(undefined)
    const [formData] = useState(new FormData())
    useEffect(() => {
        async function fetchPost() {
            const { data: response } = await axios.get('/api/setting');
            setSetting(response.data ?? {});
            if (response.data) {
                setUrl(response?.data?.main_img ? (backUrl + response?.data?.main_img) : "");
                setUrl2(response?.data?.banner_2_img ? (backUrl + response?.data?.banner_2_img) : "");
                $('.file2-link').val(response?.data?.file2_link);
                $('.banner_2_status').val(response?.data?.banner_2_status);
            }
        }
        fetchPost();
    }, [])
    const editSetting = async () => {
        if (!url && !content) {
            alert("???????????? ??????????????????.");
        } else {

            formData.append('content', content);
            formData.append('content2', content2);
            formData.append('file2_link', $('.file2-link').val());
            formData.append('banner_2_status',$('.banner_2_status').val());
            if (setting.main_img) {
                if (window.confirm("?????? ?????????????????????????")) {
                    formData.append('pk', setting?.pk);
                    const { data: response } = await axios.post('/api/updatesetting', formData);
                    if (response.result > 0) {
                        alert("??????????????? ?????????????????????.")
                    }
                }
            } else {
                if (window.confirm("?????? ?????????????????????????")) {
                    const { data: response } = await axios.post('/api/addsetting', formData);
                    if (response.result > 0) {
                        alert("??????????????? ?????????????????????.")
                    }
                }

            }
        }
    }
    const addFile = (e) => {
        if (e.target.files[0]) {
            setContent(e.target.files[0]);
            setUrl(URL.createObjectURL(e.target.files[0]))
        }
    };
    const addFile2 = (e) => {
        if (e.target.files[0]) {
            setContent2(e.target.files[0]);
            setUrl2(URL.createObjectURL(e.target.files[0]))
        }
    };
    return (
        <>
            <ManagerWrappers>
                <SideBar />
                <ManagerContentWrappers>
                    <Breadcrumb title={'?????? ??????'} nickname={myNick} />
                    <Card>

                        <Row>
                            <Col>
                                <Title>?????? ?????????</Title>
                                <ImageContainer for="file1">

                                    {url ?
                                        <>
                                            <Img src={url} alt="#"
                                            />
                                        </>
                                        :
                                        <>
                                            <AiFillFileImage style={{ margin: '6rem auto', fontSize: '4rem', color: `${theme.color.manager.font3}` }} />
                                        </>}
                                </ImageContainer>
                                <div>
                                    <input type="file" id="file1" onChange={addFile} style={{ display: 'none' }} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Title>?????? 1??????, ?????? ??????&?????? ?????? ?????????</Title>
                                <ImageContainer for="file2">

                                    {url2 ?
                                        <>
                                            <Img src={url2} alt="#"
                                            />
                                        </>
                                        :
                                        <>
                                            <AiFillFileImage style={{ margin: '6rem auto', fontSize: '4rem', color: `${theme.color.manager.font3}` }} />
                                        </>}
                                </ImageContainer>
                                <div>
                                    <input type="file" id="file2" onChange={addFile2} style={{ display: 'none' }} />
                                </div>
                            </Col>
                            <Col>
                                <Title style={{ margintop: '32px' }}>????????? ??????</Title>
                                <Input className='file2-link' />
                            </Col>
                            <Col>
                                <Title style={{ margintop: '32px' }}>????????????</Title>
                                <Select className='banner_2_status'>
                                    <option value={1}>on</option>
                                    <option value={0}>off</option>
                                </Select>
                            </Col>
                        </Row>

                    </Card>
                    <ButtonContainer>
                        <CancelButton onClick={() => navigate(-1)}>x ??????</CancelButton>
                        <AddButton onClick={editSetting}>{setting.main_img ? '??????' : '+ ??????'}</AddButton>
                    </ButtonContainer>
                </ManagerContentWrappers>
            </ManagerWrappers>
        </>
    )
}
export default MSettingEdit;