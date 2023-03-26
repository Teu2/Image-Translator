import React from "react";
import './Sidebar.scss';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

export const Sidebar = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return(
        <div className="sidebar"> 
            <Modal opened={opened} onClose={close} title="What's this application?" centered>
                <p>Have you been reading a manga and suddenly come across the fact it hasn't been updated in a few months?</p>
                <p>Translations take some time to complete, and some books just end up getting dropped by translators which is always something you don't want to see.</p> 
                <p>The solution? Let computers do things Humans can't be bothered with!</p>
                <p>Just take a snippet of the text you want to translate, upload them, click translate, then start reading!</p>
                <h5>Technologies Used</h5>
                <ul>
                    <li>React {`(Front-End)`}</li>
                    <li>Tesseract OCR {`(JPN Character Detection)`}</li>
                    <li>Rapid API - Translate Plus {`(Translation Tool)`}</li>
                    <li>Axios {'(HTTP Requests)'}</li>
                </ul>
                <h5>Raw JP Sources</h5>
                <ul>
                    <li>https://www.1101.com/home.html</li>
                    <li>https://www.weblio.jp/</li>
                    <li>https://www.lifehacker.jp/</li>
                    <li>https://tonarinoyj.jp/</li>
                </ul>
            </Modal>
            <div className="sidebar-items">
                <li><span onClick={open}>About</span></li>
                <li><a href="https://github.com/Teu2/Manga-Raw-Main"  rel="noopener" >GitHub</a></li>
                <li><a href="https://dominicyeoh.netlify.app/" rel="noopener">My Website</a></li>
            </div>
        </div>
    );  
}