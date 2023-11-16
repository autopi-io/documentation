---
id: automatic-obd-logger-pausing
title: Automatic OBD Logger Pausing
---

Automatic OBD Logger Pausing is a feature that enables the AutoPi device to automatically pause any OBD loggers when it
detects that the vehicle has stopped shaking (which also likely means that the vehicle has stopped moving). This
feature is useful in situations where the vehicle that the AutoPi is plugged into has a CAN bus protection. Such
vehicles usually detect CAN bus traffic when the vehicle is locked and in turn trigger the alarm of the vehicle - this
is done to try and protect the vehicle from being fiddled with externally through the CAN bus. Examples of such
vehicles are the BMW i3, some Mini Coopers and some Porche models.

:::note
In fact, not only the loggers are being paused, but in general the device is not allowed to send any CAN frames on the
CAN bus of the vehicle. This means that if you attempt to manually send a CAN frame with a command such as `obd.send`
or `obd.query` you will receive an error.

Passively listening (also known as sniffing) on the CAN bus is still allowed though.
:::

## How does it work?

The Automatic OBD Logger Pausing feature works by using the data from the accelerometer integrated into the AutoPi. The
accelerometer will detect motion and trigger events based on the motion detected. The three events that
are being triggered are:

- `vehicle/motion/steady`
- `vehicle/motion/shaking`
- `vehicle/motion/jolting`

Using these events (and the `vehicle/motor` or `vehicle/engine` events as helpers), the AutoPi is able to determine when
it's a good time to pause and unpause the loggers to avoid setting off the alarm of the vehicle. 

:::note
Keep in mind that the `vehicle/motion/jolting` event is not used to determine the behavior of the Automatic OBD Logger
Pausing feature.
:::

## How to set it up?

To enable the Automatic OBD Logger Pausing functionality, you will need to ensure the following advanced settings are
set on your device:

- `OBD > Automatic Logger Pausing` must be set to `True` (Enabled)
- `Accelerometer > Motion Events > Enabled` must be set to `True` (Enabled)

You can confirm that the setup has been made successfully if you confirm the following two changes in your device's
services:

1. Navigate to the workers of the Accelerometer Manager (Services > acc_manager > Workers) - there you should see an
   `xyz_logger` worker. If you open it up, you should be able to see that the trigger in the Workflow is
   `motion_event` - this enables the `vehicle/motion/*` events.
2. Navigate to the reactors of the Event Reactor (Services > event_reactor > Reactors) - there you should see two
   new reactors - `enable_obd_on_motion_shaking` and `disable_obd_on_motion_steady_or_trip_end` - these reactors are
   responsible for enabling and disabling the OBD logging.

## Troubleshooting

Sometimes, you might notice that even though you have enabled the Automatic OBD Logger Pausing feature, the AutoPi is
still sending CAN Frames on the CAN bus. This is usually caused by your vehicle being too easy to shake which in turn
triggers a `vehicle/motion/shaking` event much more easily (this is the event that reactivates the OBD loggers).
Depending on the vehicle type that you are using, the driving behavior, road conditions and more the device might think
that the vehicle is being driven while in fact it isn't or vice versa.

For this reason, we have made it possible for you to change and fine-tune the way that those motion events are being
triggered. You can find the fine-tuning settings in the advanced settings of your device under Accelerometer > Motion
Events. We suggest that you focus primarily on the Debounce Delay and Shake settings, because the
`vehicle/motion/jolting` event is not used to reactivate the OBD loggers - only the `vehicle/motion/shaking` event is.
