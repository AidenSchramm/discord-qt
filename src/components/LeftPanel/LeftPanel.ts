import { QWidget, FlexLayout, QStackedWidget, QBoxLayout, Direction } from "@nodegui/nodegui";
import { UserPanel } from "../UserPanel/UserPanel";
import './LeftPanel.scss';
import { GuildPanel } from "../GuildPanel/GuildPanel";
import { DMPanel } from "../DMPanel/DMPanel";
import { MAX_QSIZE } from "../..";

export class LeftPanel extends QWidget {
  private container = new QStackedWidget();
  private guildPanel = new GuildPanel();
  private dmPanel = new DMPanel();
  private userPanel = new UserPanel();
  private controls = new QBoxLayout(Direction.TopToBottom);

  constructor() {
    super();
    this.initLeftPanel();
  }
  private initLeftPanel() {
    const { guildPanel, dmPanel, userPanel, container, controls } = this;
    this.setLayout(controls);
    this.setObjectName('LeftPanel');
    this.setMaximumSize(240, MAX_QSIZE);
    container.addWidget(guildPanel);
    container.addWidget(dmPanel);
    container.setCurrentWidget(dmPanel);
    container.setObjectName('Container');
    controls.setSpacing(0);
    controls.setContentsMargins(0, 0, 0, 0);
    controls.addWidget(container, 1);
    controls.addWidget(userPanel, 0);
  }
}