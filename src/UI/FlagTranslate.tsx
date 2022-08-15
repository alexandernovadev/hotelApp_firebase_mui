import { useTranslate } from "../hooks/useTranslate";

import { Button } from "@mui/material";

export const FlagTranslate = () => {
  const { setTranslate } = useTranslate();

  return (
    <>
      <Button
        variant="outlined"
        sx={{ p: 0, mr: 1 }}
        onClick={() => setTranslate("en")}
      >
        EN
      </Button>
      <Button
        variant="outlined"
        sx={{ p: 0, mr: 1 }}
        onClick={() => setTranslate("es")}
      >
        ES
      </Button>
    </>
  );
};
