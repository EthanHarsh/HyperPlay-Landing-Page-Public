/*
  This file is added to your codebase if you've excluded newsletter integration from your stack when exporting from
  from Divjoy, but one of your components attempts to import this file and call one of its functions.
  Rather than break your project, we include this placeholder file so your codebase can still run.
  If you need newsletter integration, re-export from Divjoy and select a newsletter option.
  Otherwise, you can search your codebase for the function names you see below, remove all related code, then delete this file.
*/
import axios from 'axios';

async function subscribe(data) {
  const {email} = data;
  await axios.post('https://hyperplay-email-save-hjho2gwlja-uc.a.run.app', {email}, {
    headers: {
      key: "UiXUYawTZter.2RzNwv@Mf8dgCa2xXWaFH!T.jB-YM2YquKbo*wtdEPqCfL@Nx---mG9v3.3FG.9",
    }
  });
}

const newsletter = { subscribe };

export default newsletter;
