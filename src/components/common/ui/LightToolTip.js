import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

export const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#21325e",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: "0px 5px 10px 0px #778899b3",
    borderRadius: "10px",
  },
}));
