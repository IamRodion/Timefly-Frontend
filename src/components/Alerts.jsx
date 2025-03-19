import { Alert, AlertTitle, Stack } from "@mui/material";

const DescriptionAlerts = ({ open, message, severity, onClose }) => {
  if (!open) return null;

  let alertContent;

  switch (severity) {
    case "success":
      alertContent = (
        <Alert
          severity="success"
          onClose={onClose}
          sx={{ textAlign: "center", fontFamily: "Roboto Mono, sans-serif" }}
        >
          <AlertTitle
            sx={{ fontSize: "1.2rem", fontWeight: "bold", width: "100%", fontFamily: "Roboto Mono, sans-serif"}}
          >
            Success
          </AlertTitle>
          {message}
        </Alert>
      );
      break;
    case "info":
      alertContent = (
        <Alert severity="info" onClose={onClose} sx={{ textAlign: "center", fontFamily: "Roboto Mono, sans-serif" }}>
          <AlertTitle
            sx={{ fontSize: "1.2rem", fontWeight: "bold", width: "100%", fontFamily: "Roboto Mono, sans-serif" }}
          >
            Info
          </AlertTitle>
          {message}
        </Alert>
      );
      break;
    case "warning":
      alertContent = (
        <Alert
          severity="warning"
          onClose={onClose}
          sx={{ textAlign: "center", fontFamily: "Roboto Mono, sans-serif" }}
        >
          <AlertTitle
            sx={{ fontSize: "1.2rem", fontWeight: "bold", width: "100%", fontFamily: "Roboto Mono, sans-serif" }}
          >
            Warning
          </AlertTitle>
          {message}
        </Alert>
      );
      break;
    case "error":
      alertContent = (
        <Alert severity="error" onClose={onClose} sx={{ textAlign: "center", fontFamily: "Roboto Mono, sans-serif" }}>
          <AlertTitle
            sx={{ fontSize: "1.2rem", fontWeight: "bold", width: "100%", fontFamily: "Roboto Mono, sans-serif" }}
          >
            Error
          </AlertTitle>
          {message}
        </Alert>
      );
      break;
    default:
      alertContent = (
        <Alert severity="error" onClose={onClose} sx={{ textAlign: "center", fontFamily: "Roboto Mono, sans-serif" }}>
          <AlertTitle
            sx={{ fontSize: "1.2rem", fontWeight: "bold", width: "100%", fontFamily: "Roboto Mono, sans-serif" }}
          >
            Error
          </AlertTitle>
          {"Ha ocurrido un error inesperado."}
        </Alert>
      );
      break;
  }

  return (
    <Stack
      sx={{ width: "100%", display: "flex", alignItems: "center" }}
      spacing={2}
    >
      {alertContent}
    </Stack>
  );
};

export default DescriptionAlerts;
