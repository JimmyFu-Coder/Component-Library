import React from 'react';
import classNames from 'classnames';

export enum AlertSize {
    Large = 'lg',
    Small = 'sm',
}

export enum AlertType {
    Success = 'success',
    Default = 'default',
    Danger = 'danger',
    Warning = 'warning',
}

interface AlertProps {
    /**标题 */
    title: string;
    /**描述 */
    description?: string;
    /**类型 四种可选 针对四种不同的场景 */
    type?: AlertType;
    /**关闭alert时触发的事件 */
    onClose?: () => void;
    /**是否显示关闭图标*/
    closable?: boolean;
}

const Alert: React.FC<AlertProps> = props => {
    const { title, description, type, onClose, closable, ...restProps } = props;

    // const classes = classNames('viking-alert',  {
    //     [`viking-alert-${type}`]: type,
    //     disabled: type === ButtonType.Link && disabled,
    // });

    const titleClass = classNames("viking-alert-title",{
        'bold-title': description
    })

    // const handleClose = function(e){
    //     if(onClose) onClose()
    //     setHide(true)
    // }
    return (
        <a  {...restProps}>
        </a>
    );
};

Alert.defaultProps = {
    closable: true,
    type: AlertType.Default,
};

export default Alert;
