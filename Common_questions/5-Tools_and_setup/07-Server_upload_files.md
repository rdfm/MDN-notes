# How do you upload files to a web server?

see [How do you upload files to a web server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Upload_files_to_a_web_server)

> This article shows how to publish your site online with FTP tools — one of the most common ways to get a website online so others can access it from their computers.

## SFTP

Filezilla

### Logging in

### Here and there: local and remote view

### Uploading to the server

### Are they really online?

## Rsync

- local-to-remote file synchronizing tool
- generally available on most unix-based systems (macOS, Linux)
- way to synchronize files between servers or to simply move files between servers without the need of FTP
- connects two servers via the SSH protocol, allowing for the transfer of data between them


Example: 

```
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

[How to Use Rsync to Copy/Sync Files Between Servers](https://www.atlantic.net/hipaa-compliant-cloud-storage/how-to-use-rsync-copy-sync-files-servers/)

Example (over SSH):

```
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

[How To Copy Files With Rsync Over SSH](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh)
