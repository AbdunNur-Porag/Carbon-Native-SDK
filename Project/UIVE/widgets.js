function AppBar({children, ...props}){
  return (
    <header {...props}>{children}</header>
  )
}

function AppBarBody({children, ...props}){
  return (
    <nav className="top" {...props}>{children}</nav>
  )
}

function AppBarBodyLeft({children, ...props}){
  return (
    <div {...props}>{children}</div>
  )
}

function AppBarBodyRight({children, ...props}){
  return (
    <div {...props}>{children}</div>
  )
}

function AppBarBodyCenter({children, ...props}){
  return (
    <div style={{width: "max"}} {...props}>{children}</div>
  )
}

function DialogUi({children, ...props}){
  return (
    <dialog {...props}>{children}</dialog>
  )
}

function DialogUiBody({children, ...props}){
  return (
    <div {...props}>{children}</div>
  )
}

function DialogUiModel({children, ...props}){
  return (
    <dialog className="modal" {...props}>{children}</dialog>
  )
}

function DialogUiFullScreen({children, ...props}){
  return (
    <dialog className="max" {...props}>{children}</dialog>
  )
}

function DialogUiTop({children, ...props}){
  return (
    <dialog className="top" {...props}>{children}</dialog>
  )
}

function DialogUiBottom({children, ...props}){
  return (
    <dialog className="bottom" {...props}>{children}</dialog>
  )
}

function DialogUiLeft({children, ...props}){
  return (
    <dialog className="left" {...props}>{children}</dialog>
  )
}

function DialogUiRight({children, ...props}){
  return (
    <dialog className="right" {...props}>{children}</dialog>
  )
}

function Card({children, ...props}){
  return (
    <article {...props}>{children}</article>
  )
}

function List({children, ...props}){
  return (
    <ul className="list" {...props}>{children}</ul>
  )
}

function ListItem({children, ...props}){
  return (
    <li {...props}>{children}</li>
  )
}

function ListItemLeft({children, ...props}){
  return (
    <button className="transparent circle" {...props}>{children}</button>
  )
}

function ListItemCenter({children, ...props}){
  return (
    <div className="max" {...props}>{children}</div>
  )
}

function ListItemTitle({children, ...props}){
  return (
    <h6 className="small" {...props}>{children}</h6>
  )
}

function ListItemSubTitle({children, ...props}){
  return (
    <span {...props}>{children}</span>
  )
}

function ListItemRight({children, ...props}){
  return (
    <label {...props}>{children}</label>
  )
}

function Menu({children, ...props}){
  return (
    <button {...props}>{children}</button>
  )
}

function MenuTitle({children, ...props}){
  return (
    <span {...props}>{children}</span>
  )
}

function MenuBody({children, ...props}){
  return (
    <menu {...props}>{children}</menu>
  )
}

function MenuItem({children, ...props}){
  return (
    <li {...props}>{children}</li>
  )
}

function Popup({children, ...props}){
  return (
    <div className="snackbar" {...props}>{children}</div>
  )
}

function HorizontalScroll({children, ...props}){
  return (
    <div className="scroll row" {...props}>{children}</div>
  )
}

function VerticalScroll({children, ...props}){
  return (
    <div className="scroll column" {...props}>{children}</div>
  )
}

function Steppers({children, ...props}){
  return (
    <nav {...props}>{children}</nav>
  )
}

function SteppersItem({children, ...props}){
  return (
    <button className="circle small" {...props}>{children}</button>
  )
}

function SteppersItemEnable({children, ...props}){
  return (
    <i {...props}>{children}</i>
  )
}

function SteppersSpace({children, ...props}){
  return (
    <hr className="max" {...props}>{children}</hr>
  )
}

function SteppersDisable({children, ...props}){
  return (
    <button className="circle small" {...props}>{children}</button>
  )
}

function PositionBox({children, ...props}){
  return (
    <article className="no-padding auto" {...props}>{children}</article>
  )
}

function PositionBoxMedium({children, ...props}){
  return (
    <article className="no-padding medium" {...props}>{children}</article>
  )
}

function PositionBoxSmall({children, ...props}){
  return (
    <article className="no-padding small" {...props}>{children}</article>
  )
}

function PositionBoxLarge({children, ...props}){
  return (
    <article className="no-padding large" {...props}>{children}</article>
  )
}

function PositionBoxExtra({children, ...props}){
  return (
    <article className="no-padding extra" {...props}>{children}</article>
  )
}

function PositionBoxTopLeft({children, ...props}){
  return (
    <div className="padding absolute left top" {...props}>{children}</div>
  )
}

function PositionBoxTopRight({children, ...props}){
  return (
    <div className="padding absolute right top" {...props}>{children}</div>
  )
}

function PositionBoxTopCenter({children, ...props}){
  return (
    <div className="padding absolute center top" {...props}>{children}</div>
  )
}

function PositionBoxMiddleLeft({children, ...props}){
  return (
    <div className="padding absolute left middle" {...props}>{children}</div>
  )
}

function PositionBoxMiddleRight({children, ...props}){
  return (
    <div className="padding absolute right middle" {...props}>{children}</div>
  )
}

function PositionBoxMiddleCenter({children, ...props}){
  return (
    <div className="padding absolute center middle" {...props}>{children}</div>
  )
}

function PositionBoxBottomLeft({children, ...props}){
  return (
    <div className="padding absolute left bottom" {...props}>{children}</div>
  )
}

function PositionBoxBottomRight({children, ...props}){
  return (
    <div className="padding absolute right bottom" {...props}>{children}</div>
  )
}

function PositionBoxBottomCenter({children, ...props}){
  return (
    <div className="padding absolute center bottom" {...props}>{children}</div>
  )
}

function AlignLeft({children, ...props}){
  return (
    <article className="left-align" {...props}>{children}</article>
  )
}

function AlignTopLeft({children, ...props}){
  return (
    <article className="left-align top-align" {...props}>{children}</article>
  )
}

function AlignBottomLeft({children, ...props}){
  return (
    <article className="left-align bottom" {...props}>{children}</article>
  )
}

function AlignRight({children, ...props}){
  return (
    <article className="right-align" {...props}>{children}</article>
  )
}

function AlignTopRight({children, ...props}){
  return (
    <article className="right-align top" {...props}>{children}</article>
  )
}

function AlignBottomRight({children, ...props}){
  return (
    <article className="right-align bottom" {...props}>{children}</article>
  )
}

function AlignCenter({children, ...props}){
  return (
    <article className="center-align middle-align" {...props}>{children}</article>
  )
}

function AlignCenterLeft({children, ...props}){
  return (
    <article className="left-align middle-align" {...props}>{children}</article>
  )
}

function AlignCenterRight({children, ...props}){
  return (
    <article className="right-align middle-align" {...props}>{children}</article>
  )
}

function OutlinedButton({children, ...props}){
  return (
    <button className="border" {...props}>{children}</button>
  )
}

function ButtonCircleTransparent({children, ...props}){
  return (
    <button className="transparent circle" {...props}>{children}</button>
  )
}

function FabButton({children, ...props}){
  return (
    <button className="extend square" {...props}>{children}</button>
  )
}

function FabButtonText({children, ...props}){
  return (
    <span {...props}>{children}</span>
  )
}

function FabButtonIcon({children, ...props}){
  return (
    <i {...props}>{children}</i>
  )
}

function Icon({children, ...props}){
  return (
    <i {...props}>{children}</i>
  )
}

function Checkbox({children, ...props}){
  return (
    <label className="checkbox" {...props}>{children}</label>
  )
}

function CheckboxBody({children, ...props}){
  return (
    <input type="checkbox" {...props}>{children}</input>
  )
}

function CheckboxText({children, ...props}){
  return (
    <span {...props}>{children}</span>
  )
}

function CheckboxIcon({children, ...props}){
  return (
    <label className="checkbox icon" {...props}>{children}</label>
  )
}

function OldIcon({children, ...props}){
  return (
    <i {...props}>{children}</i>
  )
}

function NewIcon({children, ...props}){
  return (
    <i {...props}>{children}</i>
  )
}

function Chip({children, ...props}){
  return (
    <button className="chip" {...props}>{children}</button>
  )
}

function ChipText({children, ...props}){
  return (
    <span {...props}>{children}</span>
  )
}

function DetailsUi({children, ...props}){
  return (
    <details {...props}>{children}</details>
  )
}

function DetailsUiTitle({children, ...props}){
  return (
    <summary className="chip" {...props}>{children}</summary>
  )
}

function DetailsUiText({children, ...props}){
  return (
    <p className="chip" {...props}>{children}</p>
  )
}

function VerticalLayout({children, ...props}){
  return (
    <nav className="vertical" {...props}>{children}</nav>
  )
}

function HorizontalLayout({children, ...props}){
  return (
    <div className="row" {...props}>{children}</div>
  )
}

function InputBox({children, ...props}){
  return (
    <div className="field label" {...props}>{children}</div>
  )
}

function InputBoxLabel({children, ...props}){
  return (
    <label {...props}>{children}</label>
  )
}

function InputBoxSubLabel({children, ...props}){
  return (
    <span className="helper" {...props}>{children}</span>
  )
}

function InputBoxSubLabelError({children, ...props}){
  return (
    <span className="error" {...props}>{children}</span>
  )
}

function Loading({children, ...props}){
  return (
    <progress className="circle" {...props}>{children}</progress>
  )
}

function Space({children, ...props}){
  return (
    <div className="space" {...props}>{children}</div>
  )
}

function Max({children, ...props}){
  return (
    <div className="max" {...props}>{children}</div>
  )
}

function Helper({children, ...props}){
  return (
    <span className="helper" {...props}>{children}</span>
  )
}

function Error({children, ...props}){
  return (
    <span className="helper" {...props}>{children}</span>
  )
}

function SelectBox({children, ...props}){
  return (
    <div className="field label border" {...props}>{children}</div>
  )
}

function Seekbar({children, ...props}){
  return (
    <label className="slider" {...props}>
      <input type="range" value="5" min="4" max="8" />
      <span></span>
      <div className="tooltip"></div>
      {children}
    </label>
  )
}

function SeekbarLeft({children, ...props}){
  return (
    <i {...props}>{children}</i>
  )
}

function SeekbarRight({children, ...props}){
  return (
    <i {...props}>{children}</i>
  )
}

function SwitchBox({children, ...props}){
  return (
    <label className="switch" {...props}>{children}</label>
  )
}
//==========Specail fab======
function SpecailFabButtin({icon,...attrs}){
  return(
    <button className="circle right-round"{...attrs}>
      <i>{icon}</i>
    </button>
  )
}