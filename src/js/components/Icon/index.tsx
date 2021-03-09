import React, { ReactElement } from "react";
import "./index.scss";
interface IconProps {
  name: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface IIcon {
  [key: string]: React.SVGProps<SVGSVGElement>;
}

const icons: IIcon = {
  quote: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20.261"
      height="17.144"
      viewBox="0 0 20.261 17.144"
    >
      <g id="quote-left" transform="translate(0 -36.545)">
        <g id="Group_139" data-name="Group 139" transform="translate(0 36.545)">
          <path
            id="Path_364"
            data-name="Path 364"
            d="M7.013,44.338H4.286a1.164,1.164,0,0,1-1.169-1.169v-.389a3,3,0,0,1,.913-2.2,3,3,0,0,1,2.2-.913h.779a.79.79,0,0,0,.779-.779V37.324a.79.79,0,0,0-.779-.779H6.234a6.075,6.075,0,0,0-2.417.493A6.175,6.175,0,0,0,.493,40.362,6.072,6.072,0,0,0,0,42.779v8.572a2.255,2.255,0,0,0,.682,1.656,2.255,2.255,0,0,0,1.656.682H7.014a2.328,2.328,0,0,0,2.338-2.338V46.675a2.328,2.328,0,0,0-2.338-2.338Z"
            transform="translate(0 -36.545)"
            fill="#555"
          />
          <path
            id="Path_365"
            data-name="Path 365"
            d="M264.489,45.019a2.254,2.254,0,0,0-1.656-.682h-2.727a1.164,1.164,0,0,1-1.169-1.169v-.389a3.117,3.117,0,0,1,3.117-3.117h.779a.79.79,0,0,0,.779-.779V37.324a.79.79,0,0,0-.779-.779h-.779a6.077,6.077,0,0,0-2.417.493,6.177,6.177,0,0,0-3.324,3.324,6.074,6.074,0,0,0-.493,2.417v8.572a2.328,2.328,0,0,0,2.338,2.338h4.676a2.328,2.328,0,0,0,2.338-2.338V46.675A2.254,2.254,0,0,0,264.489,45.019Z"
            transform="translate(-244.91 -36.545)"
            fill="#555"
          />
        </g>
      </g>
    </svg>
  ),
  trash: (
    <svg
      id="Layer_1"
      height="11"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m424 64h-88v-16c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16h-88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zm-216-16c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96z" />
        <path d="m78.364 184c-2.855 0-5.13 2.386-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042c.136-2.852-2.139-5.238-4.994-5.238zm241.636 40c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z" />
      </g>
    </svg>
  ),
  reply: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13.597"
      height="11.331"
      viewBox="0 0 13.597 11.331"
    >
      <g id="reply" transform="translate(0 -32)">
        <g id="Group_135" data-name="Group 135" transform="translate(0 32)">
          <path
            id="Path_320"
            data-name="Path 320"
            d="M5.288,35.021V32L0,37.288l5.288,5.288v-3.1c3.777,0,6.421,1.209,8.309,3.852C12.841,39.554,10.575,35.777,5.288,35.021Z"
            transform="translate(0 -32)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  ),
  newTopic: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11.577"
      height="11.58"
      viewBox="0 0 11.577 11.58"
    >
      <path
        id="new-topic"
        d="M4.262,10.13,1.636,7.5,7.989,1.151l2.627,2.627ZM1.39,7.967,3.8,10.376l-3.612,1.2ZM11.423,2.973l-.456.456L8.337.8,8.793.343a1.175,1.175,0,0,1,1.662,0l.968.968A1.181,1.181,0,0,1,11.423,2.973Zm0,0"
        transform="translate(-0.188 0.001)"
        fill="#fff"
      />
    </svg>
  ),

  underline: (
    <svg width="152.515" height="22" viewBox="0 0 152.515 22">
      <defs>
        <style>{`
.a{fill:#ffdd20;opacity:0.996;isolation:isolate;}
`}</style>
      </defs>
      <path
        className="a"
        d="M628.8,109.578a23.083,23.083,0,0,1-1.78-1.583c-1.776-1.654-6.736-3.058-8.27-5.492-12.062-.857-21.191-1.492-33.537-2.415-3.483.275-16.913-.33-30.97-1.12S525.5,97.2,519.5,96.566l-1.092-.041a121.239,121.239,0,0,0-20.07-.324c-2.553.407-5.15.931-7.736,1.435,1.19.464,2.29.935,3.243,1.384-2.618-.215-5.235-.431-6.248-.058-5.593.685-2.454,2.081-.34,3.845,1.529.811-.574,1.778,1.825,2.658l-4.356-.355c-.211.667,5.373-.018,4.144,1.022-1.672-.364-3.558-.062-5.3-.2.587.96,6.026.716,5.742,1.607-.944.15-4.871-1.536-5.227-.426-.07.224,1.671.365,2.542.435-5.368.019-8.338.92-3.467,2.453-1.7-.139-4.091-.764-5.887-.717,0,.006.009.012.014.018.9.093,2.438.422,3.264.488l-3.057-.247c.158.168.338.335.527.5a14.355,14.355,0,0,0,2.315.405l-2.03-.164a14.455,14.455,0,0,0,1.712,1.164c2.4.878,4.692,2.089,6,2.191,10.516,1.2,21.084,2.246,31.605,3.011.029-.42-.523-.877.354-1.014,2.755-.215,4.927,1.339,7.683,1.119l.214-.666c2.119.43,4.323.956,6.574,1.428q6.247.276,12.442.359c-.1-.255-.145-.487.268-.549a59.816,59.816,0,0,1,6.548.58l1.089-.041a.712.712,0,0,0,.413-.505c1.112.1,2.1.236,3.015.373,12.123-.488,24.447-1.171,37.811-1.725a74.934,74.934,0,0,1,8.4-.905c4.029.045,9.138.886,13.052,1.265-.507-2.445,9.094-2.869,7.286-5.442,2.61.255,6.535.65,6.764-.013a4.877,4.877,0,0,1,.259-.6C629.46,110.057,629.125,109.825,628.8,109.578Z"
        transform="translate(-477.274 -95.908)"
      />
    </svg>
  ),
  underlineBig: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="134.52"
      height="51"
      viewBox="0 0 134.52 51"
    >
      <path
        id="Path_315"
        data-name="Path 315"
        d="M132.637,74.219c-1.23.424-2.7.7-3.441,1.483-.887.939-.338,2.187.43,3.174.514.661,2.448,2.244,1.627,3.105-.963,1.012-7.314.042-9.067-.032-7.086-.3-14.184-.5-21.285-.5-19.494-.306-39.964-.227-48.472.376l-1.5-.073c-9.2.337-20.165-.136-27.31-2.434-3.183-1.426-6.347-3.156-9.511-4.828a22.634,22.634,0,0,0,4.824-2.818c-3.288-.046-6.248.018-9.121-1.373a4.242,4.242,0,0,1-2.38-2.169c-.425-1.462,1.148-2.8,2.465-3.991a23.669,23.669,0,0,0,3.793-4.374c.817-1.22.967-2.7,2.052-3.833.8-.834,2.984-1.636,1.448-2.8-1.063-.808-3.007-.424-4.166-1.365.828-.332,1.878-.442,2.788-.7a17.01,17.01,0,0,0,2.89-1.587,16.816,16.816,0,0,1-5.255,1.3c-1.376-.007-2.885-.583-1.26-1.371a5,5,0,0,1,2.028-.345c-2.15-.472-5.558-.94-6.246-2.676-.535-1.345,2.019-3.859,4.134-3.925-1.207.038-2.295.5-3.514.57-1.709.09-1.155-1.179-.491-1.611.406-.263,1.652-.656,1.747-1.068.092-.388-1.1-1.477-1.164-1.36.777-1.429,3.335-2.337,5.1-3.284a12.533,12.533,0,0,1,4.544-1.869q22.209-2,44.633-2.4c-.232,1.05-1.274,2.1-.183,2.586,2.572,1.14,7.178-1.657,9.952-1.725a1.592,1.592,0,0,1,.97.192c.463.368-.166,1.055.369,1.376a1.67,1.67,0,0,0,1.193-.008c4.066-1.087,7.9-2.242,12.351-2.2,4.356.038,8.666.722,12.962,1.127-.3.619-.514,1.19,0,1.412,1.446.619,5.331.07,6.906-.214a7.09,7.09,0,0,1,2.784-.1c.951.221,1.4.789,1.294,1.438a20.937,20.937,0,0,0,4.22-.353c1.568-.242,5.342,1.071,6.922,1.4a61.315,61.315,0,0,1,7.192,1.594,4.87,4.87,0,0,0-1.413,3.5c.124,1.769,3.61,3.953,3.5,5.257-.117,1.408-4.316,1.916-4.242,4.091a3.363,3.363,0,0,0,2.176,2.773,13.378,13.378,0,0,0,2.119.8,7.366,7.366,0,0,1,2.322.774c.277.238.683.5.8.8.275.671-2,.952-2.69,1.133-1.256.333-2.519.655-3.812.918-.631.127-1.357.317-1.533.748-.188.457.357.89.878,1.206,2.836,1.723,6.206,2.687,9.579,3.806,1.739.578.589,1.529,1.08,2.429a8.781,8.781,0,0,0,3.218,2.689A32.145,32.145,0,0,1,132.637,74.219Z"
        transform="translate(-7.36 -31.44)"
        fill="#ffde17"
        opacity="0.996"
      />
    </svg>
  ),

  arrow: (
    <svg version="1.1" id="Warstwa_1" x="0px" y="0px" viewBox="0 0 25.3 22.1">
      <style type="text/css">
        {`
  	.st0{fill:#FFFFFF;}
  `}
      </style>
      <path
        className="st0"
        d="M25.3,9.5H4.9l7.7-7.2L10.5,0L1,8.8C0.9,8.9,0.9,8.9,0.8,9c-1.1,1.2-1,3.1,0.2,4.3l9.5,8.8l2.1-2.3l-7.7-7.2
	h20.3V9.5z"
      />
    </svg>
  ),

  streakCircle: (
    <svg version="1.1" id="Warstwa_1" x="0px" y="0px" viewBox="0 0 43 43">
      <style type="text/css">
        {`
    
    .st10{fill:#D9EFFF;}
    .st11{fill:#0093FF;}
    
    `}
      </style>
      <circle id="Ellipse_55" className="st10" cx="21.5" cy="21.5" r="21.5" />
      <path
        id="Union_5"
        className="st11"
        d="M25.3,28.5v-14c0-1.1,0.9-2,2-2h1c1.1,0,2,0.9,2,2v14H25.3z M18.3,28.5v-11c0-1.1,0.9-2,2-2h1
	c1.1,0,2,0.9,2,2v11H18.3z M11.3,28.5v-8c0-1.1,0.9-2,2-2h1c1.1,0,2,0.9,2,2v8H11.3z"
      />
    </svg>
  ),
  donatedCircle: (
    <svg version="1.1" id="Warstwa_1" x="0px" y="0px" viewBox="0 0 43 43">
      <style type="text/css">
        {`
    .st5{fill:#F2D1E3;}
    .st6{fill:#AC6089;}
    `}
      </style>
      <circle id="Ellipse_55" className="st5" cx="21.5" cy="21.5" r="21.5" />
      <g id="hert" transform="translate(-15.119 -15.578)">
        <path
          id="Path_223_1_"
          className="st6"
          d="M46.2,28c-3-1.6-6.7-1.1-9.2,1.1c-2.6-2.2-6.2-2.6-9.2-1.1c-2.5,1.3-4.1,3.9-4.1,6.8
		c0,0.8,0.1,1.6,0.4,2.3c1.2,5.4,9.3,12.5,13,12.5s11.8-7.1,13-12.4c0.3-0.8,0.4-1.6,0.4-2.4C50.4,31.9,48.8,29.3,46.2,28z
		 M48.2,36.6c-1.2,5-8.7,11-11.2,11c-2.7,0-10.1-6.3-11.2-11.1c-0.2-0.6-0.3-1.2-0.3-1.8c0-2.1,1.2-4.1,3.1-5.1
		c0.9-0.5,1.9-0.7,3-0.7c1.8,0,3.5,0.8,4.7,2.1l0.7,0.8l0.7-0.8c1.9-2.1,5.1-2.7,7.6-1.4c1.9,1,3.1,2.9,3.1,5.1
		C48.5,35.4,48.4,36,48.2,36.6L48.2,36.6z"
        />
      </g>
    </svg>
  ),
  inProgressCircle: (
    <svg version="1.1" id="Warstwa_1" x="0px" y="0px" viewBox="0 0 43 43">
      <style type="text/css">
        {`
    .st3{fill:#DED9F7;}
    .st4{fill:#836AFF;}
    `}
      </style>
      <circle id="Ellipse_55" className="st3" cx="21.5" cy="21.5" r="21.5" />
      <g id="wall-clock" transform="translate(135.117 155)">
        <g id="Group_100" transform="translate(-127 -146.074)">
          <g id="Group_99">
            <path
              id="Path_223"
              className="st4"
              d="M23.5,17.9c-0.5-0.2-1.1-0.1-1.3,0.4c-0.1,0.3-0.3,0.5-0.4,0.8c-0.3,0.5-0.2,1.1,0.3,1.3
				c0.5,0.3,1.1,0.2,1.3-0.3c0,0,0,0,0,0c0.2-0.3,0.4-0.6,0.5-0.9C24.1,18.7,24,18.1,23.5,17.9z"
            />
            <path
              id="Path_224"
              className="st4"
              d="M24.7,13.1c-0.5-0.1-1,0.2-1.1,0.8c-0.1,0.3-0.1,0.6-0.2,0.9c-0.1,0.5,0.2,1.1,0.7,1.2
				c0.5,0.1,1.1-0.2,1.2-0.7l0,0c0.1-0.3,0.2-0.7,0.2-1C25.6,13.7,25.2,13.2,24.7,13.1C24.7,13.1,24.7,13.1,24.7,13.1z"
            />
            <path
              id="Path_225"
              className="st4"
              d="M19.1,21.7c-0.3,0.1-0.6,0.2-0.8,0.3c-0.5,0.2-0.8,0.7-0.7,1.2c0.2,0.5,0.7,0.8,1.2,0.7
				c0,0,0,0,0.1,0c0.3-0.1,0.7-0.2,1-0.4c0.5-0.2,0.7-0.8,0.4-1.3C20,21.8,19.5,21.5,19.1,21.7L19.1,21.7z"
            />
            <path
              id="Path_226"
              className="st4"
              d="M12.5,4.5v7.4L9,15.4c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0l0,0l3.9-3.9c0.2-0.2,0.3-0.4,0.3-0.7
				V4.5c0-0.5-0.4-1-1-1C13,3.5,12.5,3.9,12.5,4.5C12.5,4.5,12.5,4.5,12.5,4.5L12.5,4.5z"
            />
            <path
              id="Path_227"
              className="st4"
              d="M25,1.9c-0.5,0-1,0.4-1,1v0v2.7C20.3-0.3,12.6-2,6.8,1.7S-0.7,13.1,3,19
				c2.3,3.6,6.3,5.8,10.5,5.8h0c0.4,0,0.7,0,1.1,0c0.5,0,0.9-0.5,0.9-1c0-0.5-0.5-0.9-1-0.9c0,0,0,0,0,0c-0.3,0-0.6,0-0.9,0h0
				C7.7,22.8,3,18.1,3,12.3C3,6.4,7.7,1.7,13.5,1.7c3.7,0,7.2,2,9.1,5.2h-2.7c-0.5,0-1,0.4-1,1s0.4,1,1,1h3c0.6,0,1.1-0.2,1.6-0.5
				c0,0,0.1,0,0.1-0.1C25.4,7.8,26,6.8,26,5.7V2.8C26,2.3,25.5,1.9,25,1.9z"
            />
          </g>
        </g>
      </g>
    </svg>
  ),
  finishedCircle: (
    <svg version="1.1" id="Warstwa_1" x="0px" y="0px" viewBox="0 0 43 43">
      <style>
        {`
    .st0{fill:#D9F7D9;}
    .st1{fill:#7e9f44;}
    `}
      </style>
      <circle id="Ellipse_55" className="st0" cx="21.5" cy="21.5" r="21.5" />
      <path
        className="st1"
        d="M31.9,12.5L31.9,12.5c-0.3-0.2-0.6-0.2-0.9-0.1c0,0-4.4,1.8-8.1,0c-2.6-1.1-5.6-1.2-8.3-0.4v-0.1
	c0-0.5-0.4-0.9-0.9-1c-0.5,0-0.9,0.4-1,1v20.4c0,0.5,0.4,0.9,0.9,1c0,0,0,0,0,0c0.2,0,0.5-0.1,0.6-0.2c0.2-0.2,0.3-0.4,0.3-0.7v-7.5
	c1.2-0.4,4.6-1.2,7.5,0.2c1.4,0.6,3,1,4.5,1c1.7,0,3.4-0.3,5.1-0.9c0.4-0.1,0.6-0.5,0.6-0.9V13.2C32.3,12.9,32.2,12.6,31.9,12.5z
	 M22.9,23.3c-1.5-0.6-3.2-0.9-4.8-0.9c-1.2,0-2.4,0.2-3.5,0.5v-9c1.2-0.4,4.6-1.2,7.5,0.2c2.6,1.1,5.6,1.2,8.3,0.4v9
	C29,23.9,25.8,24.6,22.9,23.3z"
      />
    </svg>
  ),
  close: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14.984"
      height="14.984"
      viewBox="0 0 14.984 14.984"
    >
      <g transform="translate(7.492 -23.252) rotate(45)">
        <path
          fill="#FFF"
          d="M145.659,242.355H129.177a1.177,1.177,0,0,1,0-2.355h16.482a1.177,1.177,0,1,1,0,2.355Zm0,0"
          transform="translate(-115.679 -219.438)"
        />
        <path
          fill="#FFF"
          d="M241.177,146.836A1.178,1.178,0,0,1,240,145.659V129.177a1.177,1.177,0,0,1,2.355,0v16.482A1.178,1.178,0,0,1,241.177,146.836Zm0,0"
          transform="translate(-219.438 -115.679)"
        />
      </g>
    </svg>
  ),
  "close-with-background": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
      <path d="M165 0C120.926 0 79.492 17.163 48.328 48.327c-64.334 64.333-64.334 169.011-.002 233.345C79.49 312.837 120.926 330 165 330c44.072 0 85.508-17.163 116.672-48.328 64.334-64.334 64.334-169.012 0-233.345C250.508 17.163 209.072 0 165 0zm74.246 239.245a14.956 14.956 0 01-10.607 4.394 14.948 14.948 0 01-10.605-4.394L165 186.213l-53.033 53.033a14.956 14.956 0 01-10.607 4.394 14.948 14.948 0 01-10.605-4.394c-5.859-5.857-5.859-15.355 0-21.213L143.787 165l-53.033-53.033c-5.859-5.857-5.859-15.355 0-21.213 5.857-5.857 15.355-5.857 21.213 0L165 143.787l53.031-53.033c5.857-5.857 15.355-5.857 21.213 0 5.859 5.857 5.859 15.355 0 21.213L186.213 165l53.033 53.032c5.858 5.858 5.858 15.356 0 21.213z" />
    </svg>
  ),
  google: (
    <svg width="22" height="22.004" viewBox="0 0 22 22.004">
      <path
        d="M655.172,500.976H644.6v4.351h5.886a6.555,6.555,0,0,1-2.821,3.348v.007l-.006,0a6.4,6.4,0,0,1-1,.478,6.541,6.541,0,0,1-8.422-3.822l0-.007h0a6.567,6.567,0,0,1-.062-4.42l0,0a6.541,6.541,0,0,1,9.642-3.42l3.565-2.92a11,11,0,0,0-16.791,3.41l0,0a11.017,11.017,0,0,0,.078,10.265l0,0a11,11,0,0,0,16.574,3.366h.006A11,11,0,0,0,655.172,500.976Z"
        transform="translate(-633.365 -492.027)"
        fill="#FFF"
      />
    </svg>
  ),
  facebook: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
    >
      <path
        d="M20.413,0H1.587A1.586,1.586,0,0,0,0,1.587V20.413A1.586,1.586,0,0,0,1.587,22H11.752V13.492H8.895v-3.33h2.857V7.712c0-2.842,1.735-4.389,4.27-4.389a23.454,23.454,0,0,1,2.562.131v2.97H16.836c-1.38,0-1.646.655-1.646,1.617v2.121h3.3l-.43,3.33H15.19V22h5.224A1.586,1.586,0,0,0,22,20.413V1.587A1.586,1.586,0,0,0,20.413,0Z"
        fill="#FFF"
      />
    </svg>
  ),
  "checkmark-after": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <g transform="translate(-1216 -339)">
        <circle
          cx="8"
          cy="8"
          r="8"
          transform="translate(1216 339)"
          fillRule="evenodd"
          fill="#e2ffe2"
        />
        <path
          fill="#7e9f44"
          d="M658.393,419.781l-5.655,5.655-3.4-3.4-1.414,1.414,3.4,3.4,0,0,1.414,1.414,7.071-7.071Z"
          transform="translate(570.072 -76.781)"
        />
      </g>
    </svg>
  ),
  "checkmark-before": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <g transform="translate(-1216 -339)">
        <circle
          fill="#f7f6ef"
          cx="8"
          cy="8"
          r="8"
          transform="translate(1216 339)"
        />
        <path
          fill="#212121"
          d="M658.393,419.781l-5.655,5.655-3.4-3.4-1.414,1.414,3.4,3.4,0,0,1.414,1.414,7.071-7.071Z"
          transform="translate(570.072 -76.781)"
        />
      </g>
    </svg>
  ),
  "checkmark-anim": (
    <svg
      className="checkmark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    >
      <circle
        className="checkmark__circle"
        cx="26"
        cy="26"
        r="25"
        fill="none"
      />
      <path
        className="checkmark__check"
        fill="none"
        d="M14.1 27.2l7.1 7.2 16.7-16.8"
      />
    </svg>
  ),
  user: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <g transform="translate(-564 -133)">
        <rect width="30" height="30" transform="translate(564 133)" />
        <path
          fill="#ffde17"
          d="M20.334,15.609a7.834,7.834,0,0,0,1.754-4.958,7.7,7.7,0,1,0-15.4,0,7.834,7.834,0,0,0,1.753,4.956,4.725,4.725,0,0,0-3.465,4.407v3.121a4.924,4.924,0,0,0,5.134,4.681h8.557A4.924,4.924,0,0,0,23.8,23.135V20.016A4.724,4.724,0,0,0,20.334,15.609ZM8.4,11.164q-.01-.256,0-.513a6,6,0,1,1,11.979-.514c.007.171.007.342,0,.514A5.995,5.995,0,1,1,8.4,11.164ZM22.088,22.751c0,1.939-1.881,3.511-4.2,3.511h-7c-2.32,0-4.2-1.572-4.2-3.511V20.406A3.705,3.705,0,0,1,9.919,17a7.584,7.584,0,0,0,8.94,0,3.705,3.705,0,0,1,3.231,3.408Z"
          transform="translate(565.024 133.049)"
        />
      </g>
    </svg>
  ),
  notify: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <g transform="translate(-521 -133)">
        <rect width="30" height="30" transform="translate(521 133)" />
        <g transform="translate(522.52 133.345)">
          <path
            fill="#ffde17"
            d="M22.079,3.733a8.308,8.308,0,0,0-11.2,2.932L7.6,12.219,1.48,16.161l6.392,3.6h0a3.956,3.956,0,0,0,1.4,5.414l.1.057a4.155,4.155,0,0,0,5.6-1.465l6.392,3.6.437-7.151,3.28-5.55a7.907,7.907,0,0,0-2.8-10.826h0C22.211,3.8,22.145,3.769,22.079,3.733ZM10.194,23.846a2.372,2.372,0,0,1-.947-3.218h0c.011-.021.023-.042.035-.063l4.261,2.4a2.492,2.492,0,0,1-3.35.882Zm13.467-9.974-3.28,5.55-.329,5.362L4.428,15.974l4.591-2.958L12.3,7.466A6.645,6.645,0,0,1,21.26,5.121a6.325,6.325,0,0,1,2.492,8.592c-.029.053-.065.107-.091.159Z"
          />
        </g>
      </g>
    </svg>
  ),

  task: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <g transform="translate(-409 -133)">
        <rect
          fill="none"
          width="30"
          height="30"
          transform="translate(409 133)"
        />
        <g transform="translate(409.079 132.656)">
          <path
            fill="#ffde17"
            className="b"
            d="M20.533,17.374H9.458a.792.792,0,0,0-.06,1.582H20.533a.792.792,0,0,0,.061-1.582C20.574,17.373,20.553,17.373,20.533,17.374Zm0,3.956H9.458a.792.792,0,0,0-.06,1.582H20.533a.792.792,0,0,0,.061-1.582ZM22.915,5.506H20.537V3.926H18.406a4.458,4.458,0,0,0-6.281-.532l0,0a4.5,4.5,0,0,0-.53.53H9.462v1.58H7.085A3.165,3.165,0,0,0,3.921,8.67h0V24.492a3.165,3.165,0,0,0,3.164,3.164h15.83a3.164,3.164,0,0,0,3.164-3.164h0V8.672a3.165,3.165,0,0,0-3.162-3.166Zm-11.865,0h1.758c0-.874.984-1.582,2.2-1.582s2.2.708,2.2,1.582h1.758V8.67H11.04ZM24.494,24.49a1.581,1.581,0,0,1-1.578,1.583H7.085A1.582,1.582,0,0,1,5.5,24.491h0V8.672A1.582,1.582,0,0,1,7.085,7.1H9.459V10.26H20.534V7.1h2.381a1.58,1.58,0,0,1,1.577,1.576ZM20.537,13.416H9.458A.792.792,0,0,0,9.4,15H20.533a.792.792,0,0,0,.061-1.582c-.02,0-.041,0-.061,0Z"
          />
        </g>
      </g>
    </svg>
  ),
  search: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <g transform="translate(-353 -133)">
        <rect
          fill="none"
          width="30"
          height="30"
          transform="translate(353 133)"
        />
        <g transform="translate(357.62 137.847)">
          <g transform="translate(0 0)">
            <path
              fill="#ffde17"
              d="M20.445,19.233,14.47,13.258a8.159,8.159,0,1,0-1.212,1.212l5.976,5.976a.429.429,0,0,0,.606,0l.606-.606A.429.429,0,0,0,20.445,19.233Zm-12.3-4.662a6.428,6.428,0,1,1,6.428-6.428A6.435,6.435,0,0,1,8.143,14.571Z"
              transform="translate(0 0)"
            />
          </g>
        </g>
      </g>
    </svg>
  ),
  "arrow-dropdown": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.3 5.4">
      <path
        fill="#212121"
        d="M7 5.4L.5 1.9C0 1.6-.1 1 .1.5.4 0 1-.1 1.5.1l5.5 3 5.8-3c.5-.3 1.1-.1 1.3.4s.1 1.1-.4 1.3L7 5.4z"
      />
    </svg>
  ),
  play: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320.001 320.001">
      <path d="M295.84 146.049l-256-144a16.026 16.026 0 00-15.904.128A15.986 15.986 0 0016 16.001v288a15.986 15.986 0 007.936 13.824A16.144 16.144 0 0032 320.001c2.688 0 5.408-.672 7.84-2.048l256-144c5.024-2.848 8.16-8.16 8.16-13.952s-3.136-11.104-8.16-13.952z" />
    </svg>
  ),
  "play-bg": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <defs />
      <path d="M256 0C114.833 0 0 114.844 0 256s114.833 256 256 256 256-114.844 256-256S397.167 0 256 0zm101.771 264.969l-149.333 96c-1.75 1.135-3.771 1.698-5.771 1.698-1.75 0-3.521-.438-5.104-1.302C194.125 359.49 192 355.906 192 352V160c0-3.906 2.125-7.49 5.563-9.365 3.375-1.854 7.604-1.74 10.875.396l149.333 96c3.042 1.958 4.896 5.344 4.896 8.969s-1.854 7.01-4.896 8.969z" />
    </svg>
  ),
  "play-yt": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -77 512.00213 512">
      <defs />
      <path
        fill="red"
        d="M501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906C416.261719 0 255.996094 0 255.996094 0S95.734375 0 55.667969 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875C0 96.15625 0 179.242188 0 179.242188s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906C96.15625 358.484375 256 358.484375 256 358.484375s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125C512 262.746094 512 179.664062 512 179.664062s.421875-83.507812-10.546875-123.570312zm0 0"
      />
      <path
        fill="#fff"
        d="M204.96875 256l133.269531-76.757812-133.269531-76.757813zm0 0"
      />
    </svg>
  ),
  circle: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 341.333 341.333">
      <path d="M170.667 0C76.41 0 0 76.41 0 170.667s76.41 170.667 170.667 170.667 170.667-76.41 170.667-170.667S264.923 0 170.667 0zm0 298.667c-70.692 0-128-57.308-128-128s57.308-128 128-128 128 57.308 128 128-57.308 128-128 128z" />
    </svg>
  ),
  fb: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.272 19">
      <g transform="translate(-22.077)">
        <path
          fill="#fff"
          d="M31.963,0,29.5,0a4.327,4.327,0,0,0-4.557,4.676V6.832H22.464a.387.387,0,0,0-.387.388v3.124a.387.387,0,0,0,.387.387h2.477v7.882a.387.387,0,0,0,.387.387h3.232a.387.387,0,0,0,.387-.387V10.731h2.9a.387.387,0,0,0,.387-.387V7.219a.388.388,0,0,0-.388-.388h-2.9V5c0-.878.209-1.324,1.354-1.324h1.66a.387.387,0,0,0,.387-.387V.391A.388.388,0,0,0,31.963,0Z"
          transform="translate(0)"
        />
      </g>
    </svg>
  ),
  twitter: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.32 15.698">
      <g transform="translate(0 -48)">
        <g transform="translate(0 48)">
          <path
            fill="#fff"
            d="M19.32,49.858a8.258,8.258,0,0,1-2.282.625,3.939,3.939,0,0,0,1.742-2.189,7.916,7.916,0,0,1-2.512.959,3.961,3.961,0,0,0-6.851,2.708,4.078,4.078,0,0,0,.092.9,11.211,11.211,0,0,1-8.164-4.143,3.962,3.962,0,0,0,1.217,5.294,3.912,3.912,0,0,1-1.79-.488v.043a3.979,3.979,0,0,0,3.173,3.892,3.953,3.953,0,0,1-1.038.13,3.5,3.5,0,0,1-.75-.068,4,4,0,0,0,3.7,2.759A7.959,7.959,0,0,1,.948,61.975,7.419,7.419,0,0,1,0,61.92,11.151,11.151,0,0,0,6.076,63.7,11.2,11.2,0,0,0,17.35,52.427c0-.175-.006-.344-.014-.512A7.9,7.9,0,0,0,19.32,49.858Z"
            transform="translate(0 -48)"
          />
        </g>
      </g>
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.131 17.131">
      <path
        fill="#fff"
        d="M19.557,19.3h0V13.015c0-3.074-.662-5.441-4.255-5.441a3.73,3.73,0,0,0-3.36,1.847H11.9V7.861H8.489V19.3h3.548V13.635c0-1.491.283-2.933,2.129-2.933,1.819,0,1.847,1.7,1.847,3.029V19.3Z"
        transform="translate(-2.429 -2.168)"
      />
      <path
        fill="#fff"
        d="M.4,7.977H3.948V19.414H.4Z"
        transform="translate(-0.113 -2.283)"
      />
      <path
        fill="#fff"
        d="M2.057,0A2.067,2.067,0,1,0,4.114,2.057,2.058,2.058,0,0,0,2.057,0Z"
      />
    </svg>
  ),
  retry: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <defs />
      <path d="M464.022 232H464a24 24 0 00-23.98 24.021 184.063 184.063 0 01-289.527 150.688c-83.1-58.188-103.369-173.136-45.181-256.237S278.449 47.1 361.549 105.29A184.078 184.078 0 01395.561 136h-67.54a24 24 0 000 48h112a24 24 0 0024-24V48a24 24 0 00-48 0v39.967a234.175 234.175 0 00-26.94-22 231.982 231.982 0 10-266.119 380.061 230.285 230.285 0 00132.567 42.015 234.971 234.971 0 0040.776-3.585 232.025 232.025 0 00191.716-228.479A24 24 0 00464.022 232z" />
    </svg>
  ),
  "document-download": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-53 1 511 511.99906">
      <defs />
      <path d="M276.410156 3.957031C274.0625 1.484375 270.84375 0 267.507812 0H67.777344C30.921875 0 .5 30.300781.5 67.152344V444.84375C.5 481.699219 30.921875 512 67.777344 512h271.085937c36.855469 0 67.277344-30.300781 67.277344-67.15625V144.941406c0-3.214844-1.484375-6.304687-3.585937-8.65625zm3.585938 39.699219l84.46875 88.671875h-54.910156c-16.324219 0-29.558594-13.109375-29.558594-29.433594zm58.867187 443.609375H67.777344c-23.125 0-42.542969-19.167969-42.542969-42.421875V67.152344c0-23.125 19.292969-42.417969 42.542969-42.417969h187.484375v78.160156c0 30.050781 24.242187 54.167969 54.292969 54.167969h71.851562v287.78125c0 23.253906-19.292969 42.421875-42.542969 42.421875zm0 0" />
      <path d="M305.101562 401.933594h-203.5625c-6.800781 0-12.367187 5.5625-12.367187 12.367187 0 6.800781 5.566406 12.367188 12.367187 12.367188h203.6875c6.800782 0 12.367188-5.566407 12.367188-12.367188 0-6.804687-5.566406-12.367187-12.492188-12.367187zm0 0M194.292969 357.535156c2.351562 2.472656 5.566406 3.957032 9.027343 3.957032 3.464844 0 6.679688-1.484376 9.027344-3.957032l72.472656-77.789062c4.699219-4.949219 4.328126-12.863282-.617187-17.4375-4.949219-4.699219-12.863281-4.332032-17.4375.617187L215.6875 317.710938V182.664062c0-6.804687-5.566406-12.367187-12.367188-12.367187-6.800781 0-12.367187 5.5625-12.367187 12.367187v135.046876L140 262.925781c-4.699219-4.945312-12.492188-5.316406-17.4375-.617187-4.945312 4.699218-5.316406 12.492187-.617188 17.4375zm0 0" />
    </svg>
  ),
  dashboard: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <defs />
      <path
        fill="#c4c0ab"
        d="M3.4 5.5c0-.8.6-1.4 1.4-1.4h2.8c.8 0 1.4.6 1.4 1.4v2.8c0 .8-.6 1.4-1.4 1.4H4.8c-.8 0-1.4-.6-1.4-1.4V5.5zm4.2 0H4.8v2.8h2.8V5.5zm2.7 0c0-.8.6-1.4 1.4-1.4h2.8c.8 0 1.4.6 1.4 1.4v2.8c0 .8-.6 1.4-1.4 1.4h-2.8c-.8 0-1.4-.6-1.4-1.4V5.5zm4.2 0h-2.8v2.8h2.8V5.5zM3.4 12.4c0-.7.6-1.4 1.4-1.4h2.8c.8 0 1.4.6 1.4 1.4v2.8c0 .8-.6 1.4-1.4 1.4H4.8c-.8 0-1.4-.6-1.4-1.4v-2.8zm4.2 0H4.8v2.8h2.8v-2.8zm2.7 0c0-.8.6-1.4 1.4-1.4h2.8c.8 0 1.4.6 1.4 1.4v2.8c0 .8-.6 1.4-1.4 1.4h-2.8c-.8 0-1.4-.6-1.4-1.4v-2.8zm4.2 0h-2.8v2.8h2.8v-2.8z"
      />
    </svg>
  ),
  bell: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <defs />
      <path
        fill="#c4c0ab"
        d="M8.7 4.2c.3-.7 1.1-1 1.7-.7.3.1.6.4.7.7 2 .6 3.4 2.4 3.4 4.5v3.1l1.2 1.8c.2.3.1.7-.2.9-.1.1-.2.1-.4.1h-3c-.2 1.3-1.4 2.2-2.6 2-1-.1-1.8-1-2-2h-3c-.2.1-.5-.2-.5-.6 0-.1 0-.3.1-.4l1.2-1.8V8.7c0-2.1 1.4-4 3.4-4.5zM9 14.7c.2.5.8.8 1.3.6.3-.1.5-.3.6-.6H9zm1-9.4c-1.8 0-3.3 1.5-3.3 3.3V12c0 .1 0 .3-.1.4l-.6 1h8l-.6-1c-.1-.1-.1-.2-.1-.4V8.7c0-1.9-1.5-3.4-3.3-3.4z"
      />
    </svg>
  ),
  clock: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <defs />
      <path
        fill="#c4c0ab"
        d="M10 4.6C7 4.6 4.6 7 4.6 10S7 15.4 10 15.4s5.4-2.4 5.4-5.4S13 4.6 10 4.6zM3.2 10c0-3.7 3-6.8 6.7-6.8s6.8 3 6.8 6.7-3 6.8-6.7 6.8c-3.7.1-6.7-3-6.8-6.7zM10 6c.4 0 .7.3.7.7v3.1l1.8 1.8c.3.3.3.7 0 1s-.7.3-1 0l-2-2c-.1-.1-.2-.3-.2-.5V6.6c0-.3.3-.6.7-.6z"
      />
    </svg>
  ),
  note: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <defs />
      <path
        fill="#c4c0ab"
        d="M7.2 3.8c0-.4.3-.7.7-.7H12c.4 0 .7.3.7.7h1.4c.8 0 1.4.6 1.4 1.4v10.3c0 .8-.6 1.4-1.4 1.4H5.9c-.8 0-1.4-.6-1.4-1.4V5.2c0-.8.6-1.4 1.4-1.4h1.3zm0 1.4H5.9v10.3h8.2V5.2h-1.4v.7c0 .4-.3.7-.7.7H7.9c-.4 0-.7-.3-.7-.7v-.7zm4.2-.7H8.6v.7h2.8v-.7z"
      />
    </svg>
  ),

  marker: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <defs />
      <path
        fill="#c4c0ab"
        d="M10 3.1c-3 0-5.5 2.5-5.5 5.5 0 3.7 4.8 7.9 5 8.1.1.1.3.1.5.1s.3-.1.5-.1c.2-.2 5-4.4 5-8.1 0-3-2.5-5.5-5.5-5.5zm0 12.2C8.6 13.9 5.9 11 5.9 8.6c0-2.3 1.8-4.1 4.1-4.1s4.1 1.8 4.1 4.1-2.7 5.3-4.1 6.7zm0-9.4c-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8c-.1-1.6-1.3-2.8-2.8-2.8zm0 4.1c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4c0 .8-.6 1.4-1.4 1.4z"
      />
    </svg>
  ),
  quoka: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <defs />
      <path
        fill="#c4c0ab"
        fillRule="evenodd"
        d="M4.2 8c-.8-1-1.1-2.3-.9-3.6.2-.8 1-1.3 1.8-1.2 1 0 1.9.3 2.6 1 .8-.4 1.6-.7 2.5-.7h.1c1 0 1.9.2 2.8.6.2 0 .3-.1.4-.1.7-.4 1.4-.6 2.2-.5.8-.1 1.6.5 1.7 1.3v.3c0 1.1-.4 2.1-1.1 2.8.2.7 0 1.5.4 2.2.4.5.6 1.2.7 1.9.1 1.3-.5 2.6-1.6 3.3-1 .7-2.1 1-3.3 1.1l-.9.3c-1.2.3-2.5.2-3.7-.2h-.1c-.1 0-.2-.1-.3-.1C5.6 16 3.5 15 3 13c-.3-1.1 0-2.2.7-3.1.2-.4.3-.6.4-1.4 0-.2 0-.3.1-.5zm2.7-3.2c-.7-.6-1.5-.8-2.3-.6-.7.2-.4 2 .2 2.9.1-.1.2-.1.3-.2.4-.2 1.1.4.4.9-.3.3-.5.7-.4 1.2v.1c0 1.1-1.4 1.6-1.3 3.2.1 1.3 1.4 2.2 2.5 2.6.5.2 1 .4 1.6.5.5.2 1 .3 1.5.4.9.1 1.9 0 2.8-.3.7-.1 1.3-.2 1.9-.3 1.5-.4 2.4-1.8 2.3-3.4-.2-.5-.4-1.1-.7-1.5-.2-.6-.3-1.2-.3-1.8-.1-.4-.3-.8-.6-1.2 0 0-.3-.8.4-.8.3.1.6.3.7.6.5-.7.7-1.5.5-2.3-.1-.4-1.4-.3-2.2.1.1.1.2.2.4.3.2-.1.4-.2.6-.4.3-.2.4-.1.5 0 .4.2.3.7-.2 1-.5.3-1.2.6-1.5.2-1.1-1.4-3.5-1.7-5.3-.9-.8.1-1.4.5-1.9 1.1-.5.4-1.4-.2-1.9-.9-.1-.2-.1-.3-.1-.5.1-.3.6-.4.9 0l.5.5c.3-.2.5-.3.7-.5zm4.7 7.9c.4 0 .3.3.2.5-.7.9-1.9 1.1-2.8.4-.2-.1-.3-.3-.4-.5 0 0 0-.4.3-.4.1.1.1.3.2.4.6.6 1.6.5 2.1-.1l.1-.1c.1-.1.2-.2.3-.2zm-1.3-2.4c.5 0 1.1.2 1.1.9 0 .4-.3.8-.7 1.1-.8.6-2.5-.8-1.5-1.6.3-.3.7-.4 1.1-.4zm-3 .3c.4 0 .6-.1.5-.6s-.2-.6-.5-.6-.5.4-.5.6.1.6.5.6zm6-1.4c.3 0 .5.5 0 .4-.3 0-.5.1-.7.3 0 0 1-.1 1 .3.1.4-.8.1-1.4.2-.2.1-.2-.5.2-.8.2-.3.6-.4.9-.4z"
        clipRule="evenodd"
      />
    </svg>
  ),
  cup: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <defs />
      <path
        fill="#c4c0ab"
        d="M16.7 3.8h-2.5v-.5c0-.3-.3-.6-.6-.6H6.3c-.3 0-.5.3-.5.6v.5H3.3c-.3 0-.6.3-.6.6v1.5c0 1.8 1.3 3.3 3.1 3.6.3 1.3 1.1 2.5 2.4 3-.2.9-1 1.5-1.9 1.5H6c-.3 0-.5.2-.5.4l-.6 2.2c-.1.3.1.6.4.7h9.2c.3 0 .6-.3.6-.6v-.1l-.6-2.2c0-.3-.3-.4-.5-.4h-.3c-.9 0-1.7-.6-1.9-1.5 1.2-.6 2.1-1.7 2.4-3 1.8-.2 3.1-1.8 3.1-3.6V4.4c0-.3-.3-.6-.6-.6zM5.8 8.3C4.7 8 3.9 7 3.9 5.9v-1h1.9v3.4zm7.7 6.8l.3 1H6.2l.3-1h7zm-.4-6.4c0 1.3-.9 2.5-2.1 2.9-.2.1-.4.3-.4.6 0 .7.3 1.3.7 1.8H8.7c.4-.5.7-1.2.7-1.8 0-.3-.1-.5-.4-.6-1.2-.4-2.1-1.6-2.1-3V3.9h6.2v4.8zm3-2.8c0 1.2-.8 2.1-1.9 2.4V4.9h1.9v1z"
      />
    </svg>
  ),
  statistics: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Warstwa_1"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 20 20"
    >
      <defs />
      <g id="Group_104" transform="translate(-151 -594)">
        <path
          id="Rectangle_350"
          d="M155.5 604.8h1c.6 0 1 .4 1 1v5h-3v-5c0-.6.4-1 1-1z"
        />
        <path
          id="Rectangle_351"
          d="M160.5 601.8h1c.6 0 1 .4 1 1v8h-3v-8c0-.6.4-1 1-1z"
        />
        <path
          id="Rectangle_352"
          d="M165.5 598.8h1c.6 0 1 .4 1 1v11h-3v-11c0-.6.4-1 1-1z"
        />
      </g>
    </svg>
  ),

  profile: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <defs />
      <path
        fill="#c4c0ab"
        d="M10 4.2C8.5 4.2 7.2 5.5 7.2 7S8.5 9.8 10 9.8s2.8-1.2 2.8-2.8-1.3-2.8-2.8-2.8zM5.9 7c0-2.3 1.9-4.1 4.1-4.1s4.1 1.9 4.1 4.1-1.9 4.1-4.1 4.1c-2.3 0-4.1-1.8-4.1-4.1zm1.3 6.9c-1.1 0-2.1.9-2.1 2.1 0 .4-.3.7-.7.7s-.6-.3-.6-.7c0-1.9 1.5-3.5 3.5-3.5h5.5c1.9 0 3.5 1.5 3.5 3.5 0 .4-.3.7-.7.7s-.7-.3-.7-.7c0-1.1-.9-2.1-2.1-2.1H7.2z"
      />
    </svg>
  ),
  confetti: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.296 131.357">
      <defs />
      <g fill="none">
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M115.000798 34.419004l-10.480792 1.560459 4.628404-10.394008z" />
          <path
            fill="#dead2b"
            d="M115.00071199 34.41919012l-5.85272232-8.83392751-4.6285708 10.39438257 10.48129312-1.56045506m1.371.6105c-.20872988.46874473-.64247191.79836832-1.15000089.87391919l-10.48129378 1.56045423c-.54178761.08066702-1.0844878-.14025116-1.41590144-.57636748-.33142322-.4361206-.3989182-1.0181636-.17609787-1.51855126l4.6285708-10.39438258c.22282032-.50038766.7005633-.8396387 1.24643456-.8851041.54586205-.04547054 1.0731451.2100699 1.37567365.66670703l5.85272299 8.83392833c.28340622.42776165.32862185.97065192.11989198 1.43939664z"
          />
        </g>
        <g
          stroke="#75b96c"
          strokeWidth="1.5"
          transform="rotate(28 22.34241815 89.56063343)"
        >
          <rect width="13.152" height="13.152" stroke="none" rx="2" />
          <rect width="11.652" height="11.652" x=".75" y=".75" rx="1.25" />
        </g>
        <g
          stroke="#75b96c"
          strokeWidth="1.5"
          transform="rotate(28 -201.30318853 139.25474)"
        >
          <rect width="15.271" height="15.271" stroke="none" rx="7.635" />
          <rect width="13.771" height="13.771" x=".75" y=".75" rx="6.885" />
        </g>
        <g stroke="#1f65ac" strokeLinecap="round" strokeWidth="1.5">
          <path strokeWidth="1.49991" d="M62.37056 52.12004l-13.3056 6.77952" />
          <path strokeWidth="1.49991" d="M52.328 48.857l6.77952 13.3056" />
        </g>
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.21496226 62.68996226l-3.7335238 18.09344831-14.35992452-14.3599245z" />
          <path
            fill="#b14343"
            d="M20.21491593 62.68991862L2.12152337 66.42347124 16.4813633 80.78331118l3.73355262-18.09339256m1.06066017-1.06066017c.35692648.35692649.51039698.86943689.40839689 1.3637965L17.95042038 81.0864475c-.11146796.54017356-.51039025.97559434-1.03876 1.1338244-.52837312.15821455-1.10095256.01370413-1.49095724-.37630055L1.0608632 67.48413141c-.39000469-.39000468-.5345151-.96258412-.37630055-1.49095724.15823006-.52836976.59365083-.92729204 1.1338244-1.03876l18.09339256-3.73355261c.4943596-.1020001 1.00687.0514704 1.36379649.4083969z"
          />
        </g>
      </g>
    </svg>
  ),
  arrowRound: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138.485 66.014">
      <defs />
      <g fill="#ffde17" data-name="Group 118">
        <path
          d="M120.565085 48.617485a1.57500284 1.57500284 0 10-.5254-3.10588 301.92038349 301.92038349 0 01-34.66 6.202 186.01157924 186.01157924 0 01-35.44373.85347 168.09418 168.09418 0 01-17.39895-2.38539 68.19777566 68.19777566 0 01-14.71479-3.96741 26.12470468 26.12470468 0 01-6.16132-3.58392A17.65226014 17.65226014 0 019.22342 40.32073a18.38964697 18.38964697 0 01-1.979665-2.681855A14.39555172 14.39555172 0 015.23481 31.37329a18.33261705 18.33261705 0 01.655515-6.211785 21.74440683 21.74440683 0 012.71647-5.77799 29.558506 29.558506 0 014.3788-5.19913A36.23700946 36.23700946 0 0124.34915 6.87312q.73577-.29863 1.482215-.564945.387835-.138155.7775-.26505l.31236-.09984s.50829-.15462.222695-.070065a1.57500284 1.57500284 0 10-.5254-3.10588C17.362425 5.505015 8.588595 11.881265 4.29137 20.54992a20.38869564 20.38869564 0 00-1.758925 13.931705 20.84693603 20.84693603 0 008.86872 11.85891c4.58424 3.03619 9.91596 4.6522 15.24716 5.85365A166.43330874 166.43330874 0 0043.40137 55.08488a178.58668424 178.58668424 0 0037.064645.289455A278.83027071 278.83027071 0 00116.22242 49.613q2.17531-.48778 4.342665-.995515z"
          data-name="Path 274"
        />
        <path
          d="M138.05178 41.69583a1.61484713 1.61484713 0 00-1.77557-1.11699q-4.497315.401705-9.00778.62294-1.12759.05506-2.25502.09907l-1.12811.04092-.520875.016465-.260385.007735-.111025.003375q-2.247365.064665-4.496445.078845-9.029525.066295-18.0465-.5965-5.10832-.37709-10.19584-.98942a1.60083978 1.60083978 0 10-.33495 3.17405q9.051795 1.086005 18.171445 1.433665 9.23722.349 18.48218-.06178 1.35032-.05872 2.700435-.134565l-21.26811 11.51277a31.65760717 31.65760717 0 00-6.810845 4.353925 1.60083978 1.60083978 0 102.00784 2.4816 14.90782045 14.90782045 0 011.293295-1.081885q.307785-.228095.62536-.44409.190765-.129775.384095-.255255.128905-.087005.25896-.16584l.05175-.03277.258695-.153795q.198565-.117885.399905-.233465.33417-.19211.671795-.378825c.54064-.2991 1.08442-.58982 1.62773-.88562l6.929305-3.750855 13.702735-7.416545 7.78913-4.21447a1.6138466 1.6138466 0 00.8568-1.91269zm-32.196655 18.925275l-.00597-.00063z"
          data-name="Path 275"
        />
      </g>
    </svg>
  ),
  cart: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="30"
      height="30"
    >
      <g transform="translate(-68.557)">
        <g transform="translate(68.557)">
          <path
            id="Path_306"
            fill="#ffde17"
            d="M24.2,23.4L22.9,8.7c0-0.4-0.4-0.7-0.8-0.7h-2.4V6.4c0-2.6-2.2-4.7-4.8-4.7
			c-2.6,0-4.6,2.1-4.7,4.7v1.6H7.9c-0.4,0-0.7,0.3-0.8,0.7L5.8,23.4c-0.2,1.7,1.1,3.3,2.9,3.4c0.1,0,0.2,0,0.3,0h12.2
			c1.7,0,3.2-1.4,3.2-3.2C24.2,23.6,24.2,23.5,24.2,23.4z M11.9,6.4c0-1.7,1.4-3.2,3.2-3.2c1.7,0,3.2,1.4,3.2,3.2c0,0,0,0,0,0v1.6
			h-6.3V6.4z M22.3,24.8c-0.3,0.3-0.7,0.5-1.2,0.5H8.9c-0.9,0-1.6-0.7-1.6-1.6c0,0,0-0.1,0-0.1l1.3-14h1.6v2.4
			c0,0.4,0.4,0.8,0.8,0.8c0.4,0,0.8-0.4,0.8-0.8V9.5h6.3v2.4c0,0.4,0.4,0.8,0.8,0.8c0.4,0,0.8-0.4,0.8-0.8V9.5h1.6l1.3,14
			C22.7,24,22.6,24.4,22.3,24.8L22.3,24.8z"
          />
        </g>
      </g>
    </svg>
  ),
  star: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 511.99143 511">
      <defs />
      <path d="M510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782L121 312.773438 88.058594 457.859375c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zM258.449219 409.605469" />
    </svg>
  ),
};

const Icon: React.FC<IconProps> = ({ name, color, onClick }): ReactElement => {
  return (
    <span className={`icon ${color && color}`} onClick={onClick && onClick}>
      {icons[name] || icons.search}
    </span>
  );
};

export default Icon;
