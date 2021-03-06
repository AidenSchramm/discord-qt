import { QWidget, FlexLayout } from "@nodegui/nodegui";
import { GuildPanel } from "../../components/GuildPanel/GuildPanel";
import './GuildView.scss';
import { LeftPanel } from "../../components/LeftPanel/LeftPanel";

export class GuildView extends QWidget {
  private channelView = new QWidget();
  private membersPanel = new QWidget();

  constructor() {
    super();
    this.initView();
  }

  initView() {
    this.setLayout(new FlexLayout());
    this.setObjectName("GuildView");
    [this.channelView, this.membersPanel]
      .forEach(w => this.layout?.addWidget(w));
  }
}