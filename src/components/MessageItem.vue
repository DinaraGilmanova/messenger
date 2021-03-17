<template lang="pug">
  .main__list--item
    .item-info
      .item-info--key(:class=`'item-info--key' + statusMessage`) {{item.code}}
        img(:src="require('../assets/checkmark.svg')" alt="✔" v-if="item.closed" height="40")
      .item-info--status(:class=`'item-info--status' + statusMessage`) {{statusOrPeriod}}
    .item-subcard
      .item-subcard--title {{item.title}}
      .item-subcard--bottom
        .subcard-author
          span {{item.author}} {{createDateString}}
        .subcard-action
          button-icon
            i.fa.fa-plus-circle.btn--icon(aria-hidden="true")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SideBar from "@/components/SideBar.vue";
import { Message } from "@/models/Message";
import dayjs, { Dayjs } from "dayjs";
import ButtonIcon from "@/ui-components/ButtonIcon.vue";

@Component({
  components: {
    SideBar,
    ButtonIcon
  }
})
export default class MessageItem extends Vue {
  @Prop() private item!: Message;

  get statusMessage(): string {
    return this.item.closed ? "__success" : "__wait";
  }

  get statusOrPeriod(): string {
    const unit: "hour" | "day" = dayjs().isSame(
      dayjs(this.item.createDate),
      "day"
    )
      ? "hour"
      : "day";

    return this.item.closed
      ? "Closed"
      : `${dayjs().diff(dayjs(this.item.createDate), unit)} ${unit.substr(
          0,
          1
        )}`;
  }

  get createDateString(): string {
    const createDate: Dayjs = dayjs(this.item.createDate);

    return dayjs().isSame(createDate, "day")
      ? createDate.format("h:mm a")
      : createDate.format("h:mm a - D MMM");
  }
}
</script>
