import React, {useState,useRef} from "react";
import Tab from "react-bootstrap/Tab";
import {Tabs, Row, Col} from "react-bootstrap";
// import Docx from 'docx-pdf';
import jsPDF from 'jspdf';
import "./download.css"
function TabNav(event) {

  // function convertToJPG() {
  //   var pngFile = document.getElementById('png-file').files[0];
  //   var pngImage = new Image();
  //   var canvas = document.createElement('canvas');
  //   var ctx = canvas.getContext('2d');
  //   var imgData;

  //   pngImage.onload = function() {
  //     canvas.width = pngImage.width;
  //     canvas.height = pngImage.height;
  //     ctx.drawImage(pngImage, 0, 0);
  //     imgData = canvas.toDataURL('image/jpeg');
  //     document.getElementById('jpg-image').src = imgData;
  //   };
  //   pngImage.src = URL.createObjectURL(pngFile);
  // }
  const [pngFile, setPngFile] = useState(null);
  const [jpgImage, setJpgImage] = useState(null);

  function handleFileChange(event) {
    setPngFile(event.target.files[0]);
  }

function convertToJPG() {
  const pngImage = new Image();
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  let imgData;

  pngImage.onload = function() {
    canvas.width = pngImage.width;
    canvas.height = pngImage.height;
    ctx.drawImage(pngImage, 0, 0);
    imgData = canvas.toDataURL('image/jpeg');
    setJpgImage(imgData);
  };
  pngImage.src = URL.createObjectURL(pngFile);
}

function downloadJPG() {
  const link = document.createElement('a');
  link.download = 'image.jpg';
  link.href = jpgImage;
  link.click();
}
// png to webp
const [webp, setWebp] = useState(null);
  const fileInput = useRef(null);

  const handleFileChange1 = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type !== 'image/png') {
      alert('Please select a PNG image.');
      return;
    }
    const imageUrl = URL.createObjectURL(file);
    const image = new Image();
    image.src = imageUrl;
    await new Promise((resolve) => {
      image.onload = resolve;
    });
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);
    const webpData = canvas.toDataURL('image/webp');
    setWebp(webpData);
  };
  const handleDownload1 = () => {
    if (!webp) return;
    const link = document.createElement('a');
    link.download = 'converted.webp';
    link.href = webp;
    link.click();
  };

  // doc to pdf
  // const [pdf, setPdf] = useState(null);
  // const fileInput2 = useRef(null);

  // const handleFileChange2 = async (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;
  //   if (file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
  //     alert('Please select a DOCX file.');
  //     return;
  //   }
  //   const pdfData = await Docx.convert(file, { resolve: { fallback: { buffer: false } } });
  //   setPdf(pdfData);
  // };

  // const handleDownload2 = () => {
  //   if (!pdf) return;
  //   const link = document.createElement('a');
  //   link.href = pdf;
  //   link.download = 'converted.pdf';
  //   link.click();
  // };

  // png to gif
  const [gif, setGif] = useState(null);
  const fileInput3 = useRef(null);

  const handleFileChange3 = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type !== 'image/png') {
      alert('Please select a PNG image.');
      return;
    }
    const imageUrl = URL.createObjectURL(file);
    const image = new Image();
    image.src = imageUrl;
    await new Promise((resolve) => {
      image.onload = resolve;
    });
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);
    const gifData = canvas.toDataURL('image/gif');
    setGif(gifData);
  };

  const handleDownload3 = () => {
    if (!gif) return;
    const link = document.createElement('a');
    link.download = 'converted.gif';
    link.href = gif;
    link.click();
  };

  // png to pdf
  const [pdf, setPdf] = useState(null);
  const fileInput4 = useRef(null);

  const handleFileChange4 = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type !== 'image/png') {
      alert('Please select a PNG image.');
      return;
    }
    const imageUrl = URL.createObjectURL(file);
    const image = new Image();
    image.src = imageUrl;
    await new Promise((resolve) => {
      image.onload = resolve;
    });
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);
    const imgData = canvas.toDataURL('image/png');
    const pdfDoc = new jsPDF();
    pdfDoc.addImage(imgData, 'PNG', 0, 0);
    const pdfData = pdfDoc.output();
    setPdf(pdfData);
  };

  const handleDownload4 = () => {
    alert("hello");
    if (!pdf) return;
    const fileInput = document.querySelector('input[type="file"]');
    if (!fileInput) return;
    const file = fileInput.files[0];
    if (!file) return;
    const name = file.name.split('.')[0] + '.pdf';
    const pdfDoc = new jsPDF();
    // pdfDoc.save(name);
    pdfDoc.output('dataurlnewwindow', name);
  };



  return (
    <>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3 navTab d-flex justify-content-center"
      >
        <Tab eventKey="home" title="PNG to JPG">
          <div>
            <section id="drop-section">
              <div class="file-select container my-5">
                <div class="row justify-content-center">
                  <div class="drag-section text-center">
                    <div class="drop-message">
                      
                       <input className="button-3" type="file" accept=".png" onChange={handleFileChange} />
                      <br />
                      <div style={{width:"100%"}}>

                      <img src={jpgImage} alt="JPG Image" className="img-fluid" />
                      </div>
                      <br />
                      <Row>
                      <Col>
                      <button className="button-5" onClick={convertToJPG}>Convert to JPG</button>
                      </Col>
                      <Col>
                      <button className="button-4" onClick={downloadJPG}>Download JPG</button>
                      </Col>
                    
                      </Row>
                    </div>
                    <div
                      id="image_previews"
                      class="previews-container ml-4 mr-auto img-fluid"
                    ></div>
{/* 
                    <button
                      type="button"
                      class="btn btn-primary btn-primary-bold-modifier px-4 py-3 font-weight-bold"
                    >
                      Select Image
                    </button> */}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Tab>
        <Tab eventKey="Web_p" title="PNG to Webp">
          <section id="drop-section">
            <div class="file-select container my-5">
              <div class="row justify-content-center">
                <div class="drag-section text-center">
                  <div class="drop-message">
                    {/* <img
                      src=""
                      alt="Upload image"
                      class="img-fluid upload-image"
                    />
                    <h4 class="file-upload-text my-3">
                      Drop your images here or <span>browse.</span>
                    </h4> */}

                <input type="file" className="button-3" ref={fileInput} onChange={handleFileChange1} />
                      {webp && <img src={webp} alt="webp" className="w-100" />}
                      <br />
                      <Row>
                        <Col>
                      <button className="button-4" onClick={handleDownload1} disabled={!webp}>
                        Download WebP
                      </button>
                        </Col>
                      </Row>
                  </div>
                  
                </div>
              </div>
            </div>
          </section>
        </Tab>
        <Tab eventKey="video_webP" title="DOC to PDF">
          <section id="drop-section">
            <div class="file-select container my-5">
              <div class="row justify-content-center">
                <div class="drag-section text-center">
                  <div class="drop-message">
                  {/* <input type="file" ref={fileInput2} onChange={handleFileChange2} accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
                    <br />
                    <button onClick={handleDownload2} disabled={!pdf}>
                      Download PDF
                    </button> */}
                </div></div>
              </div>
            </div>
          </section>
        </Tab>
        <Tab eventKey="gif_webp" title="PNG to GIF">
          <section id="drop-section">
            <div class="file-select container my-5">
              <div class="row justify-content-center">
                <div class="drag-section text-center">
                  <div class="drop-message">
                  <input type="file" className="button-3" ref={fileInput3} onChange={handleFileChange3} accept="image/png" />
      {gif && <img src={gif} alt="gif" />}
      <br />
      <Row>
        <Col>
      <button className="button-4" onClick={handleDownload3} disabled={!gif}>
        Download GIF
      </button>
        </Col>
      </Row>
                </div></div>
              </div>
            </div>
          </section>
        </Tab>
        <Tab eventKey="jpg_webP" title="PNG to PDF">
          <section id="drop-section">
            <div class="file-select container my-5">
              <div class="row justify-content-center">
                <div class="drag-section text-center">
                  <div class="drop-message">
                  <input type="file" className="button-3" ref={fileInput4} onChange={handleFileChange4} accept="image/png" />
      <br />
      <Row>
        <Col>
        <button className="button-4" onClick={handleDownload4} disabled={!pdf}>
        Download PDF
      </button>
        </Col>
      </Row>
      
                  </div>
                  
                </div>
              </div>
            </div>
          </section>
        </Tab>
        <Tab eventKey="png_webP" title="PNG to WebP">
          <section id="drop-section">
            <div class="file-select container my-5">
              <div class="row justify-content-center">
                <div class="drag-section text-center">
                  <div class="drop-message">
                    <img
                      src=""
                      alt="Upload image"
                      class="img-fluid upload-image"
                    />
                    <h4 class="file-upload-text my-3">
                      Drop your images here or <span>browse.</span>
                    </h4>
                  </div>
                  <div
                    id="image_previews"
                    class="previews-container ml-4 mr-auto"
                  ></div>

                  <button
                    type="button"
                    class="btn btn-primary btn-primary-bold-modifier px-4 py-3 font-weight-bold"
                  >
                    Select Image
                  </button>
                </div>
              </div>
            </div>
          </section>
        </Tab>
        <Tab eventKey="webp_gif" title="WEBP to Gif">
          <section id="drop-section">
            <div class="file-select container my-5">
              <div class="row justify-content-center">
                <div class="drag-section text-center">
                  <div class="drop-message">
                    <img
                      src=""
                      alt="Upload image"
                      class="img-fluid upload-image"
                    />
                    <h4 class="file-upload-text my-3">
                      Drop your images here or <span>browse.</span>
                    </h4>
                  </div>
                  <div
                    id="image_previews"
                    class="previews-container ml-4 mr-auto"
                  ></div>

                  <button
                    type="button"
                    class="btn btn-primary btn-primary-bold-modifier px-4 py-3 font-weight-bold"
                  >
                    Select Image
                  </button>
                </div>
              </div>
            </div>
          </section>
        </Tab>
        <Tab eventKey="WebP to PNG" title="WebP to PNG">
          <section id="drop-section">
            <div class="file-select container my-5">
              <div class="row justify-content-center">
                <div class="drag-section text-center">
                  <div class="drop-message">
                    <img
                      src=""
                      alt="Upload image"
                      class="img-fluid upload-image"
                    />
                    <h4 class="file-upload-text my-3">
                      Drop your images here or <span>browse.</span>
                    </h4>
                  </div>
                  <div
                    id="image_previews"
                    class="previews-container ml-4 mr-auto"
                  ></div>

                  <button
                    type="button"
                    class="btn btn-primary btn-primary-bold-modifier px-4 py-3 font-weight-bold"
                  >
                    Select Image
                  </button>
                </div>
              </div>
            </div>
          </section>
        </Tab>
        
      </Tabs>
    </>
  );
}

export default TabNav;
