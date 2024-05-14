import { Icon } from "../../data/shapes";

/**
 * IconsGroup
 * 
 * This component renders a row of small icons which link out to different urls.
 * The row moves dynamically and can take any number of icons.
 * The icon can be set to open in a new tab with the newTab param.
 */
export default function IconsGroup({ icons }: { icons: Icon[] }) {
  return (
    <div className="icons-group">
      {icons.length > 0 &&
        icons.map((icon) => {
          return (
            <a key={icon.key} href={icon.link ?? "#"} target={icon.newTab ? "_blank" : "_self"}>
              <img
                className="icon"
                src={icon.icon.src ?? ""}
                alt={icon.icon.alt ?? "icon"}
                height="50px"
                width="50px"
              />
            </a>
          );
        })}
    </div>
  );
}
