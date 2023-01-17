export const copyToClipboard = async (text: string) => {
  // navigator.permissions.query({ name: "write-on-clipboard" }).then((result) => {
  //   if (result.state == "granted" || result.state == "prompt") {
  //     alert("Write access granted!");
  //   }
  // });

  try {
    await navigator.clipboard.writeText(text);
    return console.log("Content copied to clipboard");
  } catch (err) {
    return console.error("Failed to copy: ", err);
  }
};
