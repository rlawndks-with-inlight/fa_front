import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { ShadowContainer, TextButton, Title, Wrappers } from "../../../components/elements/UserContentTemplete";
import { backUrl } from "../../../data/Data";
import defaultImg from '../../../assets/images/icon/default-profile.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdEdit } from 'react-icons/md';
import theme from "../../../styles/theme";
import ContentTable from "../../../components/ContentTable";

const MyCard = styled.div`
display:flex;
width:100%;
height:400px;
border:1px solid ${props => props.theme.color.background3};
@media screen and (max-width:700px) {
    flex-direction:column;
    height:800px;
}
`
const ProfileContainer = styled.div`
width:50%;
display:flex;
flex-direction:column;
align-items:center;
height:400px;
background:#f4f4f4;
@media screen and (max-width:700px) {
    width:100%;
}
`
const Container = styled.div`
width:50%;
font-size:14px;
@media screen and (max-width:700px) {
    width:100%;
}
`
const Content = styled.div`
width:100%;
display:flex;
`
const Category = styled.div`
width:100px;
padding:16px 0;
height:18px;
padding-left:16px;
border-right:1px solid ${props => props.theme.color.background1};
`
const Result = styled.div`
padding:16px 0;
height:18px;
padding-left:16px;
display:flex;
align-items:center;
`
const LogoutButton = styled.button`
width:160px;
height:40px;
margin:1rem auto;
border:none;
cursor:pointer;
background:${props => props.theme.color.font2};
color:#fff;
font-size:12px;
`
const MyPage = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({})
    const [isWebView, setIsWebView] = useState(false);
    const [bagList, setBagList] = useState();
    const [calssList, setClassList] = useState();
    const [payList, setPayList] = useState();
    useEffect(() => {
        async function isAdmin() {
            const { data: response } = await axios.get('/api/getmyinfo');
            if (response?.data?.pk > 0) {
                await localStorage.setItem('auth', JSON.stringify(response?.data))
                let obj = response?.data;
                setAuth(obj);
            } else {
                localStorage.removeItem('auth');
                onLogout();
            }
        }
        isAdmin();
        getMyContent();
        if (window && window.flutter_inappwebview) {
            setIsWebView(true)
        }
    }, [])
    async function getMyContent() {
        const { data: response } = await axios.post('/api/myitems', { table: 'subscribe' });
        console.log(response)
        let list = [...response?.data?.data];
        let bag_list = [];
        let class_list = [];
        let pay_list = [];
        for (var i = 0; i < list.length; i++) {
            if (list[i]?.status == 1) {
                if (list[i]?.transaction_status >= 0 && list[i]?.use_status == 1) {
                    class_list.push(list[i]);
                }
                pay_list.push(list[i]);
            } else {
                bag_list.push(list[i]);
            }
        }
        setBagList(bag_list);
        setClassList(class_list);
        setPayList(pay_list);
    }
    const pageSetting = async () => {
        await getMyContent();
    }
    const onLogout = async () => {
        if (window && window.flutter_inappwebview) {
            var params = { 'login_type': JSON.parse(localStorage.getItem('auth'))?.type };
            window.flutter_inappwebview.callHandler('native_app_logout', JSON.stringify(params)).then(async function (result) {
                //result = "{'code':100, 'message':'success', 'data':{'login_type':1, 'id': 1000000}}"
            });
        }
        const { data: response } = await axios.post('/api/logout');
        if (response.result > 0) {
            localStorage.removeItem('auth');
            window.location.href = '/login';
        } else {
            alert('error');
        }
    }

    return (
        <>
            <Wrappers className="wrapper" style={{ maxWidth: '800px' }}>
                <Title>???????????????</Title>
                <div style={{ margin: '2rem 0 1rem auto', color: `${theme.color.font2}`, fontSize: theme.size.font3, cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center' }} onClick={() => { navigate('/editmyinfo') }}>
                    <div style={{ paddingRight: '8px' }}>????????? ????????????</div>
                    <MdEdit />
                </div>

                <MyCard>
                    <ProfileContainer>
                        <img src={auth?.profile_img ? auth?.profile_img.substring(0, 4) == "http" ? auth?.profile_img : backUrl + auth?.profile_img : defaultImg} alt="#" onError={defaultImg} style={{ height: '125px', width: '125px', borderRadius: '50%', background: '#fff', margin: 'auto' }} />
                    </ProfileContainer>
                    <Container>
                        <Content>
                            <Category>?????????</Category>
                            <Result>
                                {auth?.nickname ?? "---"}
                            </Result>
                        </Content>
                        <Content>
                            <Category>?????????</Category>
                            <Result>
                                {auth?.type != 0 ? "---" : auth.id}
                            </Result>

                        </Content>
                        <Content>
                            <Category>????????????</Category>
                            <Result>********</Result>
                        </Content>
                        <Content>
                            <Category>????????????</Category>
                            <Result>{auth?.phone ?? "---"}</Result>
                        </Content>
                        <Content>
                            <Category>????????????</Category>
                            <Result>{auth?.zip_code}</Result>
                        </Content>
                        <Content>
                            <Category>??????</Category>
                            <Result>{auth?.address}</Result>
                        </Content>
                        <Content>
                            <Category>????????????</Category>
                            <Result>{auth?.address_detail}</Result>
                        </Content>
                        <Content>
                            <Category>??????????????????</Category>
                            <Result>{'??????'}</Result>
                        </Content>

                    </Container>
                </MyCard>
                <div style={{ marginTop: '36px' }} />
                {isWebView ?
                    <>

                    </>
                    :
                    <>
                        <Title>????????????</Title>
                        <ShadowContainer>
                            <ContentTable columns={[
                                { name: "????????????", column: "title", width: 30, type: 'text' },
                                { name: "??????", column: "master_name", width: 30, type: 'text' },
                                { name: "????????????", column: "", width: 30, type: "class_status" },
                                { name: "??????", column: "", width: 30, type: 'delete' },
                            ]}
                                data={bagList}
                                schema={'subscribe'}
                                pageSetting={pageSetting} />
                        </ShadowContainer>
                        <div style={{ marginTop: '36px' }} />
                        <Title>??? ?????????</Title>
                        <ShadowContainer>
                            <ContentTable columns={[
                                { name: "????????????", column: "title", width: 30, type: 'text' },
                                { name: "??????", column: "master_name", width: 40, type: 'text' },
                                { name: "????????????", column: "end_date", width: 30, type: 'end_date' },
                            ]}
                                data={calssList}
                                schema={'subscribe'} />
                        </ShadowContainer>
                        <div style={{ marginTop: '36px' }} />
                        <Title>?????? ??????</Title>
                        <ShadowContainer>
                            <ContentTable columns={[
                                { name: "????????????", column: "title", width: 30, type: 'text' },
                                { name: "??????", column: "master_name", width: 20, type: 'text' },
                                { name: "????????????", column: "price", width: 20, type: 'won' },
                                { name: "????????????", column: "trade_date", width: 30, type: 'text' },
                            ]}
                                data={payList}
                                schema={'subscribe'} />
                        </ShadowContainer>
                        <div style={{ marginTop: '36px' }} />
                    </>}

                <Content>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        <TextButton onClick={onLogout} style={{ margin: '0 8px 0 auto' }}>????????????</TextButton>
                        <TextButton onClick={() => { navigate('/resign') }}>????????????</TextButton>
                    </div>
                </Content>
                {/* <LogoutButton onClick={onLogout}>
                    ????????????
                </LogoutButton>

                <LogoutButton onClick={() => navigate('/appsetting')}>
                    ??????
                </LogoutButton> */}

                {isWebView ?
                    <>
                        <LogoutButton onClick={() => navigate('/appsetting')}>
                            ??????
                        </LogoutButton>
                    </>
                    :
                    <>
                    </>}
            </Wrappers>
        </>
    )
}
export default MyPage;