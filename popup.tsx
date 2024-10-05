import { QRCodeSVG } from "qrcode.react"
import { useEffect, useState } from "react"

function IndexPopup() {
  const [currentURL, setCurrentURL] = useState("")

  useEffect(
    () =>
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true
        },
        function (tabs) {
          const tab = tabs[0]
          if (tab.url) {
            setCurrentURL(tab.url)
          }
        }
      ),
    [chrome]
  )

  return (
    <div
      style={{
        width: 256
      }}>
      <h1
        style={{
          margin: 0,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 5,
          paddingBottom: 5,
          background: "linear-gradient(45deg, #58a2eb, #d069ca, #ed5572)",
          color: "#FFFFFF",
          borderRadius: 50,
          display: "flex",
          alignItems: "center"
        }}>
        QR Share
      </h1>
      <div
        style={{
          margin: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
        <QRCodeSVG value={currentURL} />
      </div>
    </div>
  )
}

export default IndexPopup
