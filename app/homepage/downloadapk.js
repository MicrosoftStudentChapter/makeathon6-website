"use client"
export var DownloadApk = () => {
    // download file from public
    const link = document.createElement('a');
    link.href = '/Makeathon6.apk';
    link.download = 'Makeathon6.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }