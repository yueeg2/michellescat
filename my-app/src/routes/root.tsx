import { Outlet, Link } from "react-router-dom";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box/Box";
import CustomizedAccordions from "../components/Accordion/Accordion";
import IconButtons from "../components/Button/IconButton/IconButton";
import FiberNewOutlinedIcon from '@mui/icons-material/FiberNewOutlined';

export default function Root() {
  return (
    <>
      <div id="detail">
        <Outlet />
      </div>
      <Stack
        id="sidebar"
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={0}
      >

        <article id="info">
          <h2 title="米歇爾的貓">
            <Link to={`/michellescat/`}>•米歇爾的貓•</Link>
          </h2>
          <Box sx={{
            paddingBlockEnd: '1rem',
            borderBottom: '1px solid #e3e3e3',
          }}>
            <IconButtons label="instagram" >
              <div className="profileSocialIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <g fill="currentColor">
                    <path d="M24 4.324c6.408 0 7.167.024 9.698.14 2.731.125 5.266.672 7.216 2.622 1.95 1.95 2.497 4.485 2.622 7.216.115 2.531.14 3.29.14 9.698s-.024 7.167-.14 9.698c-.125 2.731-.672 5.266-2.622 7.216-1.95 1.95-4.485 2.497-7.216 2.622-2.53.115-3.289.14-9.698.14s-7.168-.024-9.698-.14c-2.731-.125-5.266-.672-7.216-2.622-1.95-1.95-2.497-4.485-2.622-7.216-.115-2.531-.14-3.29-.14-9.698s.024-7.167.14-9.698c.125-2.731.672-5.266 2.622-7.216 1.95-1.95 4.485-2.497 7.216-2.622 2.531-.115 3.29-.14 9.698-.14M24 0c-6.518 0-7.335.028-9.895.144-3.9.178-7.326 1.133-10.077 3.884C1.278 6.778.322 10.203.144 14.105.028 16.665 0 17.482 0 24s.028 7.335.144 9.895c.178 3.9 1.133 7.326 3.884 10.077 2.75 2.75 6.175 3.706 10.077 3.884 2.56.116 3.377.144 9.895.144s7.335-.028 9.895-.144c3.899-.178 7.326-1.133 10.077-3.884 2.75-2.75 3.706-6.175 3.884-10.077.116-2.56.144-3.377.144-9.895s-.028-7.335-.144-9.895c-.178-3.9-1.133-7.326-3.884-10.077-2.75-2.75-6.175-3.706-10.077-3.884C31.335.028 30.518 0 24 0z"></path>
                    <path data-color="color-2" d="M24 11.676c-6.807 0-12.324 5.518-12.324 12.324S17.193 36.324 24 36.324 36.324 30.807 36.324 24 30.807 11.676 24 11.676zM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path>
                    <circle data-color="color-2" cx="36.811" cy="11.189" r="2.88"></circle>
                  </g>
                </svg>
              </div>
            </IconButtons>
          </Box>
          <nav>
            <ul>
              <li>
                <Link to={`d/frontend/`}>網頁開發</Link>
              </li>
              <li>
                <Link to={`d/artworks/`}><div>藝術攝影<span><FiberNewOutlinedIcon /></span></div></Link>
              </li>
              <li>
                <Link to={`d/demos/`}>音樂錄製</Link>
              </li>
            </ul>
          </nav>
        </article>

        <article className="aboutContent">
          <div>
            <CustomizedAccordions Accordions={[
              {
                id: 'about',
                title: '關於',
                content: <p>
                  研發工程師 台北市松山區<br />
                  2~3年以上開發經驗<br />
                  <br />
                  ★ OSS研究：研究開源軟體，提供解決方案以符合需求。<br />
                  ★ 專案管理：規劃、控管進度，提供更佳解決方案。<br />
                  ★ 前端開發：開發整合性平台頁面與功能，優化網頁效能。<br />
                  ★ 功能測試：優化測試時程，加快並擴增測試案例 30%<br />
                </p>,
              },
              {
                id: 'tools',
                title: '擅長工具',
                content: <>
                  <Chip label="網頁程式類" size="small" />
                  <div className="workroomTabContentText">
                    HTML、
                    CSS、
                    AJAX、
                    TypeScript、
                    React、
                    LINUX。
                  </div>
                  <Chip label="平面設計類" size="small" />
                  <div className="workroomTabContentText" style={{ paddingBlockEnd: 2 }}>
                    Photoshop。
                  </div></>,
              }
            ]} />
          </div>

        </article>

      </Stack>
    </>
  );
}