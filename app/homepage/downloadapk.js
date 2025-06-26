"use client"
export var DownloadApk = () => {
    // download file from public
    const link = document.createElement('a');
    link.href = '/FlutterIpaExport.ipa';
    link.download = 'FlutterIpaExport.ipa';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }