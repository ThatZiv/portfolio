import { Button, ButtonGroup, Container, Typography, Link, makeStyles, Tooltip } from '@material-ui/core';

export default function SocialMedia(props) {
    const capFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
    const getIconFromUrl = (url, _icon) => {
        const icon = (d, _icon) => <i className={`fa-${d ? "brands" : "solid"} fa-${d ? d.toLowerCase() : _icon}`}></i>
        var service;
        try {
            if (props.icon && props.name) throw new Error("no service needed.")
            var _url = new URL(url)
            var urlSplit = _url.hostname.split(".")
            service = urlSplit.length === 3 ? urlSplit[1] : urlSplit[0]
        } catch (e) { }
        //console.log(icon(service, props?.icon))
        return (
            <Tooltip title={service ? capFirstLetter(service) : (props?.showName ? props.url : props?.name) || props.icon}>
                <Link underline="none"
                    variant="h4" href={url}>
                    <Button style={{ backgroundColor: "#fdfdfd", color: "#1f1f1f" }}>
                        {icon(service, props?.icon)}{props?.showName && <div>&nbsp; {props?.name}</div>}
                    </Button>
                </Link>
            </Tooltip>
        )
    }
    return (
        <div>
            {getIconFromUrl(props.url)}
        </div>
    )
}