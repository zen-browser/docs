---
title: Choose between the generic and optimized build
aliases:
  - Choose between the generic and optimized build
lastmod: 2024-09-29
---

> [!note]
> This guide only applies to the *Linux* and *Windows* versions of Zen.

This [[guides/index|guide]] provides an overview of the differences between the generic and optimized builds of Zen, so you can make an informed decision on which version to use.

## Differences between the optimized and generic builds

The optimized version of Zen uses [Advanced Vector Extensions 2 (AVX2)](https://wikipedia.org/wiki/Advanced_Vector_Extensions#Advanced_Vector_Extensions_2), a CPU instruction set that enhances performance for certain tasks. This instruction set is available only on modern processors.

## Supported CPUs for the optimized builds

The optimized builds of Zen are compatible only with the following CPU families:

* AMD
  * Carrizo
  * Bristol Ridge
  * All Ryzen CPUs
* Intel
  * Desktop and Mobile Processors
    * 4th generation Intel Core and newer (All architectures)
    * Celeron and Pentium Tiger Lake and newer
    * Intel Core Series 1 and Series 2
  * High-End Desktop (HEDT) and Server Processors
    * Intel Core X-series (Skylake X, Cascade Lake)
    * Xeon Scalable (Cascade Lake)
    * Xeon Scalable (Cooper Lake)
    * 3rd generation Intel Xeon Scalable (Ice Lake, Cooper Lake)
    * 4th generation Intel Xeon Scalable (Sapphire Rapids)
    * 5th generation Intel Xeon Scalable (Emerald Rapids)

If your CPU family isn't listed, use the generic build.

## Check whether your device supports AVX2
### Linux
1. Open a terminal
2. Run the following command:
    ```bash
    grep -q -i avx2 /proc/cpuinfo && echo true
    ```
    
    The terminal outputs whether your CPU is supported (`true`) or not.

### Windows
1. Open the **Settings** app.
2. Go to **System** > **About**.

    The settings app displays your CPU model.

3. Check the model name in either the [Intel](https://ark.intel.com/content/www/us/en/ark.html) or [AMD](https://www.amd.com/en/products/specifications/processors.html) websites.